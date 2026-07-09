const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    organization: { type: String, required: true },
    issueDate: { type: String, required: true },
    credentialId: { type: String },
    verificationLink: { type: String },
    imageUrl: { type: String, required: true },
    publicId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certificate", certificateSchema);