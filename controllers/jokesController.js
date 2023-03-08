const { promisify } = require("util");
const mysql = require("mysql");
const config = require("../config/db.config");
const database = mysql.createPool(config);

const getRandomJoke = async (req, res) => {
  let { joke_type } = req.body;
  let sql = `select * from jokes where is_approved=true and type="${joke_type}" order by rand() limit 1;`;
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "Could not create joke",
          error: err.message,
        });
      return res.status(200).send(JSON.stringify(result[0]));
    });
  });
};

const createJoke = (req, res) => {
  let { joke_type, setup, punchline } = req.body;
  let sql = `insert into jokes(type,setup,punchline) values("${joke_type}","${setup}","${punchline}");`;
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "Could not create joke",
          error: err.message,
        });
      return res.status(201).json({
        message: "Joke created succesfully!",
      });
    });
  });
};

const deleteJoke = (req, res) => {
  let { id } = req.body;
  let sql = `delete from jokes where joke_id = "${id}"`;
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "Could not delete joke",
          error: err.message,
        });
      return res.status(204);
    });
  });
};

const updateJoke = (req, res) => {
  let { id, joke_type, setup, punchline, is_approved } = req.body;

  let sql = `update jokes set type="${joke_type}", setup="${setup}", punchline="${punchline}",is_approved=${is_approved} where joke_id=${id}`;
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "Could not update joke",
          error: err.message,
        });
      return res.status(200).json({
        message: "Joke updated successfully",
      });
    });
  });
};

const getAllJokes = (req, res) => {
  let sql = "select * from jokes order by joke_id desc;";
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        error: err.message,
      });
    connection.query(sql, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "Error getting jokes",
          error: err.message,
        });
      return res.status(200).json({
        message: "Jokes fetched successfully",
        data: result,
      });
    });
  });
};

const getTypes = async (req, res) => {
  let sql = "select distinct type from jokes";
  database.getConnection((error, connection) => {
    if (error)
      return res.status(500).json({
        message: "Could not get joke types",
        error: err.message,
      });
    connection.query(sql, (error, result) => {
      if (error)
        return res.status(500).json({
          message: "Could not get joke types",
          error: err.message,
        });
      return res.status(200).json({
        message: "Fetched types successfully",
        data: result,
      });
    });
  });
};

module.exports = {
  getRandomJoke,
  createJoke,
  deleteJoke,
  updateJoke,
  getAllJokes,
  getTypes,
};
