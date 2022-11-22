const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config();

const User = require("../models/user_schema");

exports.signUp = async (req, res) => {
  const user = await User.findOne({ username: req.user.username });

  user.firstname = req.body.firstName;
  user.lastname = req.body.lastName;
  //user.email = req.body.email; // Took this out.

  await user.save();

  delete user.password;
  res.status(201).json({
    message: "signUp succesfully",
    user: user,
  });
};

exports.login = (req, res, { err, user, info }) => {
  if (!user) {
    return res.json({ message: "Email or password is incorrect" });
  }

  // req.login is provided by passport
  req.login(user, { session: false }, async (error) => {
    if (error) return res.status(400).json(error);

    const body = { _id: user._id, email: user.email };
    //You store the id and username in the payload of the JWT.
    // You then sign the token with a secret or key (JWT_SECRET), and send back the token to the user.
    // DO NOT STORE PASSWORDS IN THE JWT!
    const token = jwt.sign(
      { user: body },
      process.env.JWT_SECRET || "something_secret"
    );

    return res.status(200).json({ token });
  });
};