const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const validator = require("validator");

// 1. Schema Definition
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// 2. Transporter Setup (Optimized Port 587 for Cloud & Local Environments)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // 16-digit Google App Password
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify SMTP connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ Gmail Transporter Error:", error.message);
  } else {
    console.log("✅ Gmail SMTP server is ready to send emails.");
  }
});

// Helper function to sanitize user inputs
function escapeHtml(text = "") {
  return String(text)
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// 3. Controller Function
async function createContactController(req, res) {
  try {
    let { name, email, subject, message } = req.body || {};

    name = name?.trim();
    email = email?.trim();
    subject = subject?.trim();
    message = message?.trim();

    // Field Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Sanitize values
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\r\n|\r|\n/g, "<br>");

    // Save entry to Database
    await Contact.create({ name, email, subject, message });

    // A. Admin Email Option (Sent to YOU)
    const adminMailOptions = {
      from: `"Shivam Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: safeEmail,
      subject: `🔥 New Portfolio Contact: ${safeSubject}`,
      html: `
      <div style="margin:0;padding:0;background:#020617;font-family:Arial,sans-serif;color:#ffffff;">
        <div style="max-width:650px;margin:30px auto;background:#0f172a;border-radius:24px;overflow:hidden;border:1px solid #38bdf8;box-shadow:0 0 35px rgba(56,189,248,0.35);">
          
          <!-- Header -->
          <div style="padding:35px;text-align:center;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);">
            <h1 style="margin:0;font-size:30px;color:#ffffff;font-weight:800;">🚀 New Contact Alert</h1>
            <p style="font-size:16px;color:#e0f2fe;margin-top:6px;">Someone just contacted you from your portfolio website</p>
          </div>
          
          <!-- Body Content -->
          <div style="padding:30px;"> 
            <div style="background:#020617;border-radius:16px;padding:20px;margin-bottom:16px;border-left:5px solid #22d3ee;">
              <h3 style="color:#22d3ee;margin:0 0 6px;font-size:14px;text-transform:uppercase;letter-spacing:1px;">👤 Visitor Name</h3>
              <p style="font-size:18px;margin:0;color:#ffffff;font-weight:bold;">${safeName}</p>
            </div>

            <div style="background:#020617;border-radius:16px;padding:20px;margin-bottom:16px;border-left:5px solid #38bdf8;">
              <h3 style="color:#38bdf8;margin:0 0 6px;font-size:14px;text-transform:uppercase;letter-spacing:1px;">📧 Email Address</h3>
              <p style="font-size:18px;margin:0;color:#ffffff;font-weight:bold;">${safeEmail}</p>
            </div>

            <div style="background:#020617;border-radius:16px;padding:20px;margin-bottom:16px;border-left:5px solid #818cf8;">
              <h3 style="color:#818cf8;margin:0 0 6px;font-size:14px;text-transform:uppercase;letter-spacing:1px;">📝 Subject</h3>
              <p style="font-size:18px;margin:0;color:#ffffff;font-weight:bold;">${safeSubject}</p>
            </div>

            <div style="background:linear-gradient(135deg,#020617,#111827);border-radius:16px;padding:22px;border:1px solid #334155;">
              <h3 style="color:#22d3ee;margin-top:0;font-size:16px;">💬 Message</h3>
              <p style="font-size:16px;line-height:1.7;color:#e5e7eb;margin:0;">${safeMessage}</p>
            </div>

            <!-- Quick Reply Action Button -->
            <div style="text-align:center;margin-top:30px;">
              <a href="mailto:${safeEmail}" style="display:inline-block;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);color:#ffffff;text-decoration:none;padding:14px 30px;border-radius:999px;font-weight:bold;font-size:15px;box-shadow:0 4px 15px rgba(37,99,235,0.4);">
                Reply Now 🚀
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background:#020617;padding:18px;text-align:center;color:#94a3b8;font-size:13px;border-top:1px solid #1e293b;">
            Message received from Shivam Raikwar Portfolio Website
          </div>

        </div>
      </div>
      `,
    };

    // B. User Confirmation Email Option (Sent to User)
    const userMailOptions = {
      from: `"Shivam Raikwar" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🌟 Your Message Has Reached Shivam Raikwar",
      html: `
      <div style="margin:0;padding:0;background:#020617;font-family:Arial,sans-serif;color:#ffffff;">
        <div style="max-width:650px;margin:30px auto;background:#0f172a;border-radius:24px;overflow:hidden;border:1px solid #22d3ee;box-shadow:0 0 40px rgba(34,211,238,0.35);">
          
          <!-- Header -->
          <div style="padding:35px;text-align:center;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);">
            <h1 style="margin:0;font-size:30px;color:#ffffff;font-weight:800;">Thank You, ${safeName}! 🎉</h1>
            <p style="font-size:16px;color:#e0f2fe;margin-top:6px;">Your message has been received successfully.</p>
          </div>

          <!-- Body Content -->
          <div style="padding:30px;">
            <p style="font-size:18px;line-height:1.7;color:#e5e7eb;margin-top:0;">Hey <b>${safeName}</b>,</p>
            <p style="font-size:16px;line-height:1.7;color:#cbd5e1;">
              Thank you for reaching out through my portfolio website. I have received your message and will review it promptly. Expect a reply from me shortly!
            </p>

            <!-- Copy of Message -->
            <div style="background:linear-gradient(135deg,#020617,#111827);padding:22px;border-radius:18px;border-left:5px solid #22d3ee;margin:25px 0;border-top:1px solid #1e293b;border-right:1px solid #1e293b;border-bottom:1px solid #1e293b;">
              <h3 style="margin-top:0;color:#22d3ee;font-size:15px;text-transform:uppercase;letter-spacing:1px;">📩 Your Submitted Message</h3>
              <p style="font-size:15px;line-height:1.7;color:#e5e7eb;margin:0;">${safeMessage}</p>
            </div>

            <!-- Developer Card Signature -->
            <div style="background:#020617;border-radius:16px;padding:20px;text-align:center;border:1px solid #334155;">
              <h2 style="margin:0;color:#38bdf8;font-size:20px;">🚀 Shivam Raikwar</h2>
              <p style="color:#94a3b8;margin:6px 0 0;font-size:14px;">Frontend Developer | Java DSA Learner | MERN Stack Developer</p>
            </div>

            <div style="text-align:center;margin-top:30px;">
              <a href="mailto:${process.env.EMAIL_USER}" style="display:inline-block;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);color:#ffffff;text-decoration:none;padding:14px 30px;border-radius:999px;font-weight:bold;font-size:15px;box-shadow:0 4px 15px rgba(6,182,212,0.4);">
                Contact Again 💙
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background:#020617;padding:18px;text-align:center;color:#94a3b8;font-size:13px;border-top:1px solid #1e293b;">
            This is an automated confirmation from Shivam Raikwar Portfolio Website 🚀
          </div>

        </div>
      </div>
      `,
    };

    // C. Wait for BOTH emails to finish sending before responding
    const emailResults = await Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    const adminSent = emailResults[0].status === "fulfilled";
    const userSent = emailResults[1].status === "fulfilled";

    if (!adminSent) {
      console.error("❌ Admin Email Failed Error:", emailResults[0].reason);
    } else {
      console.log("✅ Admin Email Sent Successfully!");
    }

    if (!userSent) {
      console.error("❌ User Email Failed Error:", emailResults[1].reason);
    } else {
      console.log("✅ User Email Sent Successfully!");
    }

    // Success response to Frontend
    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      emailStatus: {
        adminSent,
        userSent
      }
    });

  } catch (err) {
    console.error("❌ Contact Controller Server Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error: " + err.message,
    });
  }
}

// Get All Contacts (Admin/Dashboard)
async function getAllContactsController(req, res) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  createContactController,
  getAllContactsController,
};