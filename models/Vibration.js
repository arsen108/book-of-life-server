const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
    _id: Number,
    intro: String,
    pdf: String
})

const VibrationSchema = new mongoose.Schema({
    _id: Number,
    hiddenQualities: String,
    personalGift: String,
    hiddenAbilities: String,
    destination: String,
    business: String,
    perspectives: String,
    individualProgram: {
        "intro": String,
        "lessons": [LessonSchema]
    },
})

module.exports = mongoose.model('Vibration', VibrationSchema);
