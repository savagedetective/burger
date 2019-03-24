//grab SQL connection
var connection = require("../config/connection.js");

//holds our ORM and included functions
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },

    insertOne: function() {
        console.log("this will insert a burger");
    },

    updateOne: function() {
        console.log("this will update a burger");
    }
};

//export
module.exports = orm;