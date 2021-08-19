const express = require("express");
const QuestionC = require('../controller/questionController');

const QuestionRouter = express.Router();

QuestionRouter.get("/:name/:value", (req, res) => {
  const {name, value} = req.params;
  const {queryParam} = req.query;
  let filter;
  if(queryParam){
    filter = {[name]: {[queryParam]: value}};
  }else{
    filter = {[name]: value};
  }
  QuestionC.retrieve(filter)
  .then((resolve) => {res.json({docsLength: resolve.length ,docs:resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
});

QuestionRouter.get('/sorted/:name/:value', async (req, res) => {
  const {name, value} = req.params;
  let params = {...req.query, [name]: value};
  const docs = await QuestionC.sorted(params);
  res.json({docsLength: docs.length, docs: docs});
});

QuestionRouter.get('/aggre/:site/:limit', async (req, res) => {
  const docs = await QuestionC.aggre(req.params);
  res.json(docs);
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
