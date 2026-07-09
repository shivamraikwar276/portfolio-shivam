const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

// Define Contact Schema and Model inside or import it if already created
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// Reusable Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("\n", "<br>");
}

async function createContactController(req, res) {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // 1. Save to MongoDB (Optimized using create)
    const dbPromise = Contact.create({
      name: safeName,
      email: safeEmail,
      subject: safeSubject,
      message: safeMessage,
    });

    // 2. Email templates preparation
    const adminMailPromise = transporter.sendMail({
      from: `"Shivam Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New Portfolio Contact: ${subject}`,
      html: `
      <div style="margin:0;padding:0;background:#020617;font-family:Arial,sans-serif;color:#ffffff;">
        <div style="max-width:700px;margin:30px auto;background:#0f172a;border-radius:24px;overflow:hidden;border:1px solid #38bdf8;box-shadow:0 0 35px rgba(56,189,248,0.35);">
          <div style="padding:35px;text-align:center;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);">
            <h1 style="margin:0;font-size:34px;color:#ffffff;">🚀 New Contact Alert</h1>
            <p style="font-size:17px;color:#e0f2fe;">Someone just contacted you from your portfolio website</p>
          </div>
          <div style="padding:35px;">
            <div style="background:#020617;border-radius:18px;padding:22px;margin-bottom:18px;border-left:6px solid #22d3ee;">
              <h3 style="color:#22d3ee;margin:0 0 8px;">👤 Visitor Name</h3>
              <p style="font-size:20px;margin:0;">${safeName}</p>
            </div>
            <div style="background:#020617;border-radius:18px;padding:22px;margin-bottom:18px;border-left:6px solid #38bdf8;">
              <h3 style="color:#38bdf8;margin:0 0 8px;">📧 Email Address</h3>
              <p style="font-size:18px;margin:0;">${safeEmail}</p>
            </div>
            <div style="background:#020617;border-radius:18px;padding:22px;margin-bottom:18px;border-left:6px solid #818cf8;">
              <h3 style="color:#818cf8;margin:0 0 8px;">📝 Subject</h3>
              <p style="font-size:18px;margin:0;">${safeSubject}</p>
            </div>
            <div style="background:linear-gradient(135deg,#020617,#111827);border-radius:18px;padding:25px;border:1px solid #334155;">
              <h3 style="color:#22d3ee;margin-top:0;">💬 Message</h3>
              <p style="font-size:17px;line-height:1.8;color:#e5e7eb;">${safeMessage}</p>
            </div>
            <div style="text-align:center;margin-top:35px;">
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);color:#ffffff;text-decoration:none;padding:16px 34px;border-radius:999px;font-weight:bold;font-size:16px;">
                Reply Now 🚀
              </a>
            </div>
          </div>
          <div style="background:#020617;padding:20px;text-align:center;color:#94a3b8;font-size:14px;">
            Message received from Shivam Raikwar Portfolio Website
          </div>
        </div>
      </div>
      `,
    });

    const userMailPromise = transporter.sendMail({
      from: `"Shivam Raikwar" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🌟 Your Message Has Reached Shivam Raikwar",
      html: `
      <div style="margin:0;padding:0;background:#020617;font-family:Arial,sans-serif;color:#ffffff;">
        <div style="max-width:700px;margin:30px auto;background:#0f172a;border-radius:26px;overflow:hidden;border:1px solid #22d3ee;box-shadow:0 0 40px rgba(34,211,238,0.35);">
          <div style="padding:40px;text-align:center;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);">
            <h1 style="margin:0;font-size:34px;color:white;">Thank You, ${safeName}! 🎉</h1>
            <p style="font-size:17px;color:#e0f2fe;">Your message has been received successfully.</p>
          </div>
          <div style="padding:35px;">
            <p style="font-size:19px;line-height:1.8;color:#e5e7eb;">
              Hey <b>${safeName}</b>,
            </p>
            <p style="font-size:17px;line-height:1.8;color:#cbd5e1;">
              Thank you for contacting me through my portfolio website.  
              Your message is important to me, and I will try to reply as soon as possible.
            </p>
            <div style="background:linear-gradient(135deg,#020617,#111827);padding:26px;border-radius:20px;border-left:6px solid #22d3ee;margin:28px 0;">
              <h3 style="margin-top:0;color:#22d3ee;">📩 Your Submitted Message</h3>
              <p style="font-size:17px;line-height:1.8;color:#e5e7eb;">${safeMessage}</p>
            </div>
            <div style="background:#020617;border-radius:18px;padding:22px;text-align:center;border:1px solid #334155;">
              <h2 style="margin:0;color:#38bdf8;">🚀 Shivam Raikwar</h2>
              <p style="color:#94a3b8;margin:8px 0 0;">Frontend Developer | Java DSA Learner | MERN Stack Developer</p>
            </div>
            <div style="text-align:center;margin-top:35px;">
              <a href="mailto:${process.env.EMAIL_USER}" style="display:inline-block;background:linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed);color:white;text-decoration:none;padding:16px 34px;border-radius:999px;font-weight:bold;font-size:16px;">
                Contact Again 💙
              </a>
            </div>
          </div>
          <div style="background:#020617;padding:22px;text-align:center;color:#94a3b8;font-size:14px;">
            This is an automatic confirmation from Shivam Raikwar Portfolio Website 🚀
          </div>
        </div>
      </div>
      `,
    });

    // 3. Run MongoDB save and both Mail sends concurrently (Fastest Execution)
    await Promise.all([dbPromise, adminMailPromise, userMailPromise]);

    return res.status(200).json({
      success: true,
      message: "Message saved to DB and sent successfully to Gmail",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

async function getAllContactsController(req, res) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
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