const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("URI =", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;