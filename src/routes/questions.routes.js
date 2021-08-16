const express = require("express");
const questions = require("../data/stackExchangeApiGetter");
const QuestionC = require('../controller/question');

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
    res.json({message:"questions"})
})

QuestionRouter.post("/", async (req, res) => {
  const {site} = req.body
  QuestionC.many(site)
  .then((result) => {res.json({message: `${result} documents added`});})
  .catch((result) => {res.json({error: result})})

})

module.exports = QuestionRouter;
