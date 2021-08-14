const express = require("express");
const questions = require("../data/stackExchangeApiGetter");
const QuestionC = require('../controller/question');

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
    res.json({message:"questions"})
})

QuestionRouter.post("/", (req, res) => {
  const {site} = req.body
  const result = QuestionC.many(site)
  res.json(result);
})

module.exports = QuestionRouter;
