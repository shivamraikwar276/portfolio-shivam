const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/view", (req, res) => {
  const filePath = path.join(
    process.cwd(),
    "uploads",
    "Shivam_Resume.pdf"
  );

  res.sendFile(filePath);
});

module.exports = router;