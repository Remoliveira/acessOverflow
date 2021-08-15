const express = require("express");
const questions = require("../data/stackExchangeApiGetter");
const QuestionC = require('../controller/question');

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
    res.json({message:"questions"})
})

QuestionRouter.post("/", (req, res) => {
  const {url} = req.body
  const result = QuestionC.many(url)
  res.json(result);
})

module.exports = QuestionRouter;
