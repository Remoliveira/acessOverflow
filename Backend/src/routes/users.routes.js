const express = require("express");
const UserController = require("../controller/UserController");

const UsersRouter = express.Router();

UsersRouter.get("/", (req, res) => {
  const filter = req.body;
  userController = new UserController();
  userController.retrieve(filter)
  .then((resolve) => {res.json({docsLength: resolve.length ,docs:resolve})})
  .catch((reject) => {res.status(400).json({error: reject})});
})

UsersRouter.get('/sorted', async (req, res) => {
  const params = req.body;
  try{
    const userController = new UserController();
    const docs = await userController.sorted(params);
    res.json({length: docs.length, docs});
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
