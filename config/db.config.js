require("dotenv").config();
const mysql = require("mysql");

const config = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// const connection = mysql.createConnection(config)

// connection.connect((err) => {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

module.exports = config;
