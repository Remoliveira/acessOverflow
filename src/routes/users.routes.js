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


UsersRouter.post("/", (req, res) => {

    const { site } = req.body;

    const userController = new UserController();

    const result = userController.many(site);

    res.json({result})
});

module.exports = UsersRouter;
