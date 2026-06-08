const path = require("path");
const fs = require("fs");

function downloadCVController(req, res) {

    const filePath = path.join(process.cwd(), "uploads", "Shivam_Resume.pdf");

    console.log("Path:", filePath);
    console.log("Exists:", fs.existsSync(filePath));

    res.download(filePath);
}

module.exports = {
    downloadCVController
};