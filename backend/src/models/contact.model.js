

const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: [3, "Name should be at least 3 Character"],
        required: [true, "Name should be required for creating contact"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email should be required for creating contact"],
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email"
        ],
    },

    subject: {
        type: String,
        required: [true, "subject is required for response"],
        minlen: [4, "Subject should be at least 4 Character"],
        trim: true,
    },

    message: {
        type: String,
        required: [true, "message is required"],
        minlength: [10, "message should be atleast 10 Character"],
        trim: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60 * 24 * 2
    }
}, {
    timestamps: true
})

const contactModel = mongoose.model("contact", contactSchema)

module.exports = contactModel;

