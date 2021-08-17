const express = require("express");
const questions = require("../data/stackExchangeApiGetter");
const QuestionC = require('../controller/question');

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
  const filter = req.body;
  QuestionC.retrieve(filter)
  .then((resolve) => {res.json({docsLength: resolve.length ,docs:resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
})

QuestionRouter.post("/", async (req, res) => {
  const {site} = req.body
  QuestionC.many(site)
  .then((result) => {res.status(201).json({message: `${result} documents added`});})
  .catch((result) => {res.status(400).json({error: result})})

})

module.exports = QuestionRouter;
