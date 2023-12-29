const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true
    },
    role: { type: String, enum: ["MERCHANT", "STUDENT"], required: true, default: "STUDENT" },
});

const User = mongoose.model("User", userSchema);

module.exports = {
    userSchema,
    User,
};