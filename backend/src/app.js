const cors = require("cors");
const express = require("express");
const contactRoutes = require("./routes/contact.routes");
const cvRoutes = require("./routes/cv.routes");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cv", cvRoutes);
app.use("/api/contact", contactRoutes);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/", (req, res) => {
    res.send("Server running");
});

module.exports = app;