import * as mongoose from "mongoose";

const VibrationSchema = new mongoose.Schema({
    hiddenQualities: String,
    personalGift: String,
    hiddenAbilities: String,
    destination: String,
    business: String,
    perspectives: String,
    individualProgram : {
        "intro": String,
        "lessons": []
    },
})

module.exports = mongoose.model('Vibration', VibrationSchema)
