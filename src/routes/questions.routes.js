const express = require("express");
const questions = require("../data/stackExchangeApiGetter")

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
    res.json({message:"questions"})
})

QuestionRouter.post("/", (req, res) => {
    const { site } = req.body;
    
    questions(site)

    res.json({message: "add"})
})

module.exports = QuestionRouter;