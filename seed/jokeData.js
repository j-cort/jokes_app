const mongoose = require("mongoose");
const Joke = require("../models/joke.js");
const fs = require("fs");
const parse = require("csv-parse");

module.exports = async () => {
  const count = await Joke.countDocuments()
  if(!count) {
    fs.readFile("./seed/jokes.csv", (err, data) => {
      parse(data, {}, async (err, jokes) => {
    
        for(let i = 0; i < jokes.length; i++) {
          const joke = new Joke({ content: jokes[i][0]})
          await joke.save()
        }
    
      });
    });
  }
}