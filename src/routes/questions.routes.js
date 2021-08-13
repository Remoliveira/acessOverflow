const express = require("express");


const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
    res.json({message:"questions"})
})

module.exports = QuestionRouter;