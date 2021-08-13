const express = require("express");

const AnswersRouter = express.Router();

AnswersRouter.get("/", (req, res) => {
    res.json({message: "answers"});
})

module.exports = AnswersRouter;