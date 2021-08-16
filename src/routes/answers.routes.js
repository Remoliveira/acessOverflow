const express = require("express");
const AnswerC = require('../controller/answer');

const AnswersRouter = express.Router();

AnswersRouter.get("/", (req, res) => {
    res.json({message: "answers"});
});

AnswersRouter.post('/', (req, res) => {
  const {site} = req.body;
  const result = AnswerC.many(site);
  res.json({message: `${result} documents added`})
});

module.exports = AnswersRouter;
