const express = require("express");
const questions = require("../data/stackExchangeApiGetter")

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
    res.json({message:"questions"})
})

QuestionRouter.post("/", (req, res) => {
    questions()
})

module.exports = QuestionRouter;