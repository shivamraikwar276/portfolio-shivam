
// // const express = require("express");

// // const app = express();

// // // const cvRoutes = require("./routes/cv.routes");

// // app.get("/", (req, res) => {
// //     res.send("Server running");
// // });

// // module.exports = app;


// const express = require("express");

// const app = express();

// const cvRoutes = require("./routes/cv.routes");
// const contactRoutes = require("./routes/contact.routes");

// app.use(express.json());

// // 👇 Ye line zaroor add karo
// app.use("/cv", cvRoutes);
// app.use("/contact", contactRoutes);

// app.get("/", (req, res) => {
//     res.send("Server running");
// });

// module.exports = app;

const express = require("express");
const cors = require("cors");

const app = express();

const cvRoutes = require("./routes/cv.routes");
const contactRoutes = require("./routes/contact.routes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/cv", cvRoutes);
app.use("/contact", contactRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Server running");
});

module.exports = app;