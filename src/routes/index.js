const express = require("express")

const QuestionRouter = require("./questions.routes");
const AnswersRouter = require("./answers.routes")
const UsersRouter = require("./users.routes")


const router = express.Router()

router.use("/questions", QuestionRouter);
router.use("/answers", AnswersRouter);
router.use("/users", UsersRouter);

module.exports = router;
