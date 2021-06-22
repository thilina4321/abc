const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000;

app.use(express.json());

const userRouter = require("./router/user");

app.use(userRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/user12", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to the database");
  })
  .catch((e) => console.log("connection fail"));

app.listen(port, () => {
  console.log("app is start on port ", port);
});
