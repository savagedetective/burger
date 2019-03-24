//setup SQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"password",
    database: "burgers_db"
});

//make said connection
connection.connect(function(err) {
    if (err) {
        console.log("error connecting to SQL: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;