const express = require("express");
const cors = require("cors")
const app = express()

const router = require("./src/routes/index");


app.use(cors())
app.use(router)


app.listen(3333, () =>{"Running on port 3333"})