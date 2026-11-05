const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    match: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "match",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    opponent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    won: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("result", resultSchema);