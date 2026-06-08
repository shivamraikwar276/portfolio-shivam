
const cors = require("cors"); // frontend connection
const express = require("express")
const contactRoutes = require("./routes/contact.routes");
const cvRoutes = require("./routes/cv.routes");
 
const path = require("path");

const app = express()

app.use("/api/cv", cvRoutes);
app.use(cors()) // frontend connection
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

module.exports =  app;
