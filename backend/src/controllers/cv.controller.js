const path = require("path");
const fs = require("fs");

function downloadCVController(req, res) {

    const filePath = path.join(
        process.cwd(),
        "uploads",
        "Shivam_Resume.pdf"
    );

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({
            success: false,
            message: "Resume not found"
        });
    }

    res.sendFile(filePath);
}

module.exports = {
    downloadCVController
};