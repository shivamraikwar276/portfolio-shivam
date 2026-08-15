

// const express = require("express");
// const cors = require("cors");

// const cvRoutes = require("./routes/cv.routes");
// const contactRoutes = require("./routes/contact.routes");
// const certificateRoutes = require("./routes/certificate.routes"); // <-- New Route

// const app = express();

// // =======================
// // Middlewares
// // =======================
// app.use(cors());

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// // =======================
// // Routes
// // =======================
// app.use("/cv", cvRoutes);

// app.use("/contact", contactRoutes);

// // Certificate API
// app.use("/api/certificates", certificateRoutes);

// // =======================
// // Home Route
// // =======================
// app.get("/", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Portfolio Backend Running Successfully 🚀",
//     });
// });

// // =======================
// // 404 Route
// // =======================
// app.use((req, res) => {
//     res.status(404).json({
//         success: false,
//         message: "Route Not Found",
//     });
// });

// // =======================
// // Global Error Handler
// // =======================
// app.use((err, req, res, next) => {
//     console.error(err);

//     res.status(err.status || 500).json({
//         success: false,
//         message: err.message || "Internal Server Error",
//     });
// });

// module.exports = app;





const express = require("express");
const cors = require("cors");

const cvRoutes = require("./routes/cv.routes");
const contactRoutes = require("./routes/contact.routes");
const certificateRoutes = require("./routes/certificate.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// Routes (All prefixed with /api)
// =======================
app.use("/api/cv", cvRoutes);
app.use("/api/contact", contactRoutes); // <-- Added /api prefix here!
app.use("/api/certificates", certificateRoutes);

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Portfolio Backend Running Successfully 🚀",
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;