const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const jokeRouter = require("./router/jokes");
const seedJokeData = require('./seed/jokeData')()
const AppError = require("./errorHandling/AppError");

mongoose
  .connect("mongodb://127.0.0.1:27017/jokes_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Connection Open!"))
  .catch((err) => console.log("Mongo Connection Error!!", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", jokeRouter);

app.all('*', (req, res, next) => {
  next(new AppError('Page Not Found!', 404))
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong" } = err;
  res.status(status).json(message);
});

app.listen(3050, () => {
  console.log("Listening on port 3050.");
});
