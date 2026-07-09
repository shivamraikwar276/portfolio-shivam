// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const router = express.Router();

// router.get("/view", (req, res) => {
//   const filePath = path.join(
//     process.cwd(),
//     "uploads",
//     "Shivam_Resume.pdf"
//   );

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({
//       success: false,
//       message: "Resume not found",
//     });
//   }

//   res.sendFile(filePath);
// });

// module.exports = router;










const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/view", (req, res) => {
  const filePath = path.join(__dirname, "../../uploads/Shivam_Resume.pdf");

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: "Resume not found",
      path: filePath,
    });
  }

  res.sendFile(filePath);
});

module.exports = router;
