// Import MySQL connection.
var connection = require("../config/connection.js");
const { printQuestionMarks, objToSql } = require("../config/helper");

var orm = {
  get: function(column_name, table_name, where_column, some_value, cb) {
    var sql_array = [];
    sql_array.push(column_name);
    sql_array.push(table_name);
    var sql = "SELECT ?? FROM ??";
    if (where_column) {
      sql += " WHERE ?? = ?";
      sql_array.push(where_column);
      sql_array.push(some_value);
    }
    connection.query(sql, sql_array, function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },

  create: function(table_name, columns, values, cb) {
    var sql = "INSERT INTO " + table_name;

    sql += " (";
    sql += columns.toString();
    sql += ") ";
    sql += "VALUES (";
    sql += printQuestionMarks(values.length);
    sql += ") ";
    var query = connection.query(sql, values, function(
      err,
      result
    ) {
      if (err) throw err;

      cb(result);
    });
    
  },

  update: function(table, objColValues, condition, cb) {
    var sql = "UPDATE " + table;

    sql += " SET ";
    sql += objToSql(objColValues);
    sql += " WHERE ";
    sql += condition;

    console.log(sql);
    connection.query(sql, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table_name, some_column, some_value, cb) {
    var sql = "DELETE FROM ?? WHERE ?? = ?";
    connection.query(sql, [table_name, some_column, some_value], function(
      err,
      result
    ) {
      if (err) throw err;

      cb(result);
    });
  }
};

// Export the orm object for the model (burgers.js)
module.exports = orm;
