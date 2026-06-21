const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
    name: String, 
    age: Number,
})

const mydbModel = mongoose.model("mydb" , mySchema)

module.exports = mydbModel
