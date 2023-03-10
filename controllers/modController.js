const mysql = require("mysql");
const config = require("../config/db.config");
const generateToken = require("../helpers/token");
const encryptPassword = require("../helpers/hashPassword");
const compareHash = require("../helpers/compareHash");
const database = mysql.createPool(config);

const loginMod = (req, res) => {
  let { email, password } = req.body;
  let sql = `select * from users where email="${email}";`;
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      connection.release();
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
      connection.release();
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
const approveMod = (req, res) => {
  console.log("Request: ",req.body);
  let { user_id } = req.body;
  let sql = `update users set is_approved = true where user_id = ${user_id};`;
  database.getConnection((err, connection) => {
    if (err)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (error, result) => {
      connection.release();
      if (error)
        return res.status(500).json({
          message: "Could not approve moderator",
          error: error.message,
        });
      return res.status(200).json({
        message: "Moderator updated successfully",
      });
    });
  });
};

const getAllMods = (req, res) => {
  let sql = "select * from users where user_id > 1 order by user_id desc;";
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      connection.release();
      if (err)
        return res.status(500).json({
          message: "Error getting moderators",
          error: err.message,
        });
      return res.status(200).json({
        message: "Mods fetched successfully",
        data: result,
      });
    });
  });
};

module.exports = {
  loginMod,
  signupMod,
  approveMod,
  getAllMods,
};
