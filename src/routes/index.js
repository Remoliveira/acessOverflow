const express = require("express")

const QuestionRouter = require("./questions.routes");
const AnswersRouter = require("./answers.routes")

const router = express.Router()

router.use("/questions", QuestionRouter);
router.use("/answers", AnswersRouter);

module.exports = router;