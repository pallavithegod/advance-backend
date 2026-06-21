const mongoose = require("mongoose")

const uri = process.env.URI

async function connectDB(){
    await mongoose.connect(uri)

    console.log("Connected to Database")
}

module.exports = connectDB