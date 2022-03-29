const express = require("express");
const router = express.Router();
const Joke = require("../models/joke");

// CREATE NEW USER
router.post("/users", async (req, res) => {
  const { name, email, username, password, location } = req.body.user;
  const user = new User({ name, email, username });
  await User.register(user, password);
  const newUserPacket = {
    success: true, 
    username, 
    location
  }
  res.json(newUserPacket);
});





module.exports = router;
