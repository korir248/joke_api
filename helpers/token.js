require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const generateToken = (email, password) => {
  return jwt.sign({ email, password }, secret, { expiresIn: "1h" });
};

module.exports = generateToken;
