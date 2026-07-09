// // require("dotenv").config();

// // const app = require("./src/app");
// // const connectDB = require("./src/config/db");

// // const PORT = process.env.PORT || 3000;

// // connectDB();

// // app.listen(PORT, () => {
// //     console.log(`Server running successfully on port ${PORT}`);
// // });



// require("dotenv").config();

// const app = require("./src/app");
// const connectDB = require("./src/config/db");

// const PORT = process.env.PORT || 3000;

// // Connect MongoDB
// connectDB();

// // Start Server
// app.listen(PORT, () => {
//     console.log(`✅ Server running successfully on port ${PORT}`);
// });



require("dotenv").config();

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

// Connect MongoDB
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running successfully on port ${PORT}`);
});
