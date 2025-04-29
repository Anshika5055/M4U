var mysql = require("mysql2");
require("dotenv").config();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Anshika@123",
  database: "M4U",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("DB connected");
});

module.exports = conn;
