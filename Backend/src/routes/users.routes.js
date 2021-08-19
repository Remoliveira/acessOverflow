const express = require("express");
const UserController = require("../controller/UserController");

const UsersRouter = express.Router();

UsersRouter.get("/:name/:value", (req, res) => {
  let {name, value} = req.params;
  let {queryParam, subDoc, limit} = req.query;
  if(!limit){
    limit = 10;
  }
  if(subDoc){
    name += '.' + subDoc;
  }
  let filter;
  if(queryParam){
    filter = {[name]: {[queryParam]: value}};
  }else{
    filter = {[name]: value};
  }
  const params = {limit, filter}
  userController = new UserController();
  userController.retrieve(params)
  .then((resolve) => {res.json({docsLength: resolve.length ,docs:resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
})

UsersRouter.get('/sorted/:name/:value', async (req, res) => {
  let {name, value} = req.params;
  let {queryParam, sortBy, subDocF, subDocS, limit} = req.query;
  if(!sortBy) return res.status(400).json({message: 'coloca o sordBy troxa'});
  if(subDocF){
    name += '.' + subDocF;
  }
  if(subDocS){
   sortBy += '.' + subDocS;
  }
  if(!limit){
    limit = 10;
  }
  let filter;
  if(queryParam){
    filter = {[name]: {[queryParam]: value}};
  }else{
    filter = {[name]: value};
  }
  const params = {sortBy, filter, limit}
  try{
    const userController = new UserController();
    const docs = await userController.sorted(params);
    res.json({docsLength: docs.length, docs});
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


UsersRouter.post("/", (req, res) => {

    const { site } = req.body;

    const userController = new UserController();

    const result = userController.many(site);

    res.json({result})
});

UsersRouter.delete('/', (req, res) => {
  const filter = req.body;
  userController = new UserController();
  userController.delete(filter)
  .then((resolve) => {res.json({resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
});

module.exports = UsersRouter;
