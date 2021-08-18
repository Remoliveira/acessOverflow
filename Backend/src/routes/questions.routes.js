const express = require("express");
const QuestionC = require('../controller/questionController');

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
  const filter = req.body;
  QuestionC.retrieve(filter)
  .then((resolve) => {res.json({docsLength: resolve.length ,docs:resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
})

QuestionRouter.post("/", async (req, res) => {
  const { site } = req.body
  while(true){
    for(const single of site){
      
      QuestionC.many(single)
      .then((result) => {res.status(201).json({message: `${result} documents added`});})
      .catch((result) => {res.status(400).json({error: result})})
    }
  }
})

module.exports = QuestionRouter;
