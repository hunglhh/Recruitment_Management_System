const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "sql12.freesqldatabase.com",
  user: "sql12621730",
  password: "1rnvkBZ1Zu",
  port: 3306,
  database: "sql12621730",
});

if (!db) {
  console.log("Lỗi cm Rồi");
}

module.exports = db;
