const express = require("express");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");
const upload = require("../middleware/multer");
const Certificate = require("../models/certificate.model");

const router = express.Router();

const checkPassword = (req, res, next) => {
  const password = req.headers["x-auth-password"];

  if (password !== process.env.ADMIN_UPLOAD_PASSWORD) {
    return res.status(401).json({
      success: false,
      message: "Invalid admin password. ",
    });
  }

  next();
};

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "portfolio_certificates",
        resource_type: "image",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

router.post("/upload", checkPassword, upload.single("certificateImage"), async (req, res) => {
  try {
    const { title, organization, issueDate, credentialId, verificationLink } =
      req.body;

    if (!title || !organization || !issueDate) {
      return res.status(400).json({
        success: false,
        message: "Title, organization and issueDate are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Certificate image is required",
      });
    }

    const result = await uploadToCloudinary(req.file.buffer);

    const certificate = await Certificate.create({
      title,
      organization,
      issueDate,
      credentialId,
      verificationLink,
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });

    res.status(201).json({
      success: true,
      message: "Certificate uploaded successfully.",
      certificate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Upload failed",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      certificates,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch certificates",
      error: error.message,
    });
  }
});

module.exports = router;