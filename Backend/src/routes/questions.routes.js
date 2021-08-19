const express = require("express");
const QuestionC = require('../controller/questionController');

const QuestionRouter = express.Router();

QuestionRouter.get("/", (req, res) => {
  const filter = req.body;
  QuestionC.retrieve(filter)
  .then((resolve) => {res.json({docsLength: resolve.length ,docs:resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
});

QuestionRouter.get('/sorted', async (req, res) => {
  const params = req.body;
  const docs = await QuestionC.sorted(params);
  res.json({docsLength: docs.length, docs: docs});
});

QuestionRouter.post("/", async (req, res) => {
  const { site } = req.body
  const date = {
    from: 1628380800,
    to: 1628985600
  }
  while(true){
  let result;
    for(const single of site){

      result = await QuestionC.many(single, date);
        console.log("finish", result);
    }
    date.from -= 604800;
    date.to -= 604800;
  }
      res.status(201).json(result);
});

QuestionRouter.delete('/', (req, res) => {
  const filter = req.body;
  QuestionC.delete(filter)
  .then((resolve) => {res.json({resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
});

module.exports = QuestionRouter;
