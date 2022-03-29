const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const seedJokeData = require('./seed/jokeData')()
const jokeRouter = require("./router/jokes");


mongoose
  .connect('mongodb://127.0.0.1:27017/jokes_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Connection Open!"))
  .catch((err) => console.log("Mongo Connection Error!!", err));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());
// app.use("/", jokeRouter);

app.get("/", (req, res) => {
  // if(req.session.viewCount) {
  //   req.session.viewCount++
  // } else {
  //   req.session.viewCount = 1
  // }
  res.send("home");
});

app.listen(3050, () => {
  console.log("Listening on port 3050.");
});










