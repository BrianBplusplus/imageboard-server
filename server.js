const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const imageRouter = require("./image/router");
const loginRouter = require("./auth/router");
const userRouter = require("./user/router");

const bodyParser = require("body-parser");

const db = require("./db.js");
const Image = require("./image/model.js");

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);
app.use(imageRouter);
app.use(loginRouter);
app.use(userRouter);

app.get("/", (request, response) => res.send("This page doesn't exist"));

app.listen(port, () =>
  console.log(`Greetings! Imageboard server listening on port ${port}!`)
);
