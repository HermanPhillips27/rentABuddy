const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teachersSchema = new Schema({
    name: {type: String,  required: true},
    price: {type: Number, required: true},
    imgURL: {type: String, required: true}
})

const Teacher = mongoose.model("Teacher", teachersSchema)
module.exports = Teacher;