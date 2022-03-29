const fs = require("fs");
const parse = require("csv-parse");
const Joke = require("../models/joke.js");

module.exports = async () => {

  fs.readFile("./seed/jokes.csv", (err, data) => {
    parse(data, {}, async (err, jokes) => {
  
      for(let i = 0; i < jokes.length; i++) {
        const joke = new Joke({ content: jokes[i][0]})
        await joke.save()
      }
  
    });
  });

}



