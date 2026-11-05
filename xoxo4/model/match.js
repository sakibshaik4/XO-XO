const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    opponent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    status: {
        type: String,
        enum: ["awaiting", "started", "completed"],
        default: "awaiting"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("match", matchSchema);