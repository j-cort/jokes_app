const express = require("express");
const router = express.Router();
const Joke = require("../models/joke");
const handleAsyncErrors = require('../errorHandling/handleAsyncErrors')
const { validateJoke } = require('../errorHandling/validations')

// GET ALL JOKES
router.get("/jokes", handleAsyncErrors(async (req, res) => {
  const jokes = await Joke.find({})
  res.json(jokes)
}))

// GET SPECIFIC JOKE
router.get("/jokes/:id", handleAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const joke = await Joke.findById(id)
  res.json(joke)
}))

// GET RANDOM JOKE
router.get("/jokes-rand", handleAsyncErrors(async (req, res) => {
  const count = await Joke.countDocuments()
  const random = Math.floor(Math.random()*count)
  const joke = await Joke.findOne().skip(random)
  res.json(joke)
}))

// CREATE JOKE
router.post("/jokes", handleAsyncErrors(async (req, res) => {
  const { content } = req.body;
  validateJoke(content)
  const joke = new Joke({ content });
  const addedJoke = await joke.save();
  res.json(addedJoke);
}));

// DELETE JOKE
router.delete('/jokes/:id', handleAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const joke = await Joke.findByIdAndDelete(id, { new: true });
  res.json(joke)
}))

// UPDATE JOKE
router.put('/jokes/:id', handleAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const joke = await Joke.findByIdAndUpdate(
    id, 
    { ...req.body },
    { new: true }
  );
  res.json(joke)
}))

module.exports = router;
