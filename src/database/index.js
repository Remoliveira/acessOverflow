const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/acessOverflow");

const questions = new mongoose.Schema({
    _id: String,
    name: String,
    rating: String
})