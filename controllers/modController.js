const mysql = require("mysql");
const config = require("../config/db.config");
const generateToken = require("../helpers/token");
const encryptPassword = require("../helpers/hashPassword");
const compareHash = require("../helpers/compareHash");
let db = mysql.createConnection(config);

const loginMod = (req, res) => {
  let { email, password } = req.body;
  let sql = `select * from users where email="${email}";`;
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "An error occured during login",
          error: err.message,
        });
      if (result[0]) {
        if (!compareHash(password, result[0].password)) {
          return res
            .status(403)
            .send({ message: "Wrong password. Please try again!" });
        } else {
          let token = generateToken(email, password);
          return res.status(200).send({
            message: "Login was successful",
            user: result[0],
            token: token,
          });
        }
      }
    });
  });
};

const signupMod = (req, res) => {
  let { name, email, password } = req.body;

  let enc_password = encryptPassword(password);
  let sql = `insert into users(fullname,email,password) values("${name}","${email}","${enc_password}")`;
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "An error occured during signup",
          error: err.message,
        });
      return res.status(201).send({
        message: "User created successfully",
      });
    });
  });
};

module.exports = {
  loginMod,
  signupMod,
};
