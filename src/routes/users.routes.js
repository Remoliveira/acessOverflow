const express = require("express");
const UserController = require("../controller/UserController");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {

    res.json({message:"ok"})
})


usersRouter.post("/", (req, res) => {

    const { site } = req.body;

    const userController = new UserController();

    const result = userController.many(site);

    res.json({result})
});

module.exports = usersRouter;