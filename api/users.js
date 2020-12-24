// required boilerplate for all modules
const express = require("express");
const router = express.Router();
// import model that interacts with DB
const User = require("../models/User");

// get all users
router.get("/", async (req, res) => {
  try {
    console.log("Fetching users...");
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// create a new user
router.post("/", async (req, res) => {
  // extract necessary info from request body
  const { name, email } = req.body;
  //   create new user instance with extracted info
  const newUser = new User({
    name: name,
    email: email
  });
  try {
    await newUser.save();
    res.json({ message: "Successfully created new user account!" });
  } catch (err) {
    res
      .status(400)
      .json({ error: err.message, message: "Oops! An error occurred." });
  }
});

module.exports = router;
