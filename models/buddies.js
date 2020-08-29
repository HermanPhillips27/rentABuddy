const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buddySchema = new Schema({
    name: {type: String,  required: true},
    price: {type: Number, required: true},
    imgURL: {type: String, required: true}
})

const Buddy = mongoose.model("Buddy", buddySchema)
module.exports = Buddy;