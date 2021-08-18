const express = require("express");
const AnswerC = require('../controller/answer');

const AnswersRouter = express.Router();

AnswersRouter.get("/", (req, res) => {
  const filter = req.body;
  AnswerC.retrieve(filter)
  .then((resolve) => {res.json({docsLength: resolve.length ,docs:resolve})})
  .catch((reject) => {res.status(400).json({error: reject})})
});

AnswersRouter.post('/', (req, res) => {
  const {site} = req.body;
  const result = AnswerC.many(site);
  res.json({message: `${result} documents added`})
});

module.exports = AnswersRouter;
