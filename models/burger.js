const orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("*", "burgers", null, null, function(res) {
      cb(res);
    });
  },
  create: function(cols, values, cb) {
    orm.insertOne("burgers", cols, values, function(res) {
      cb(res);
    });
  },
  update: function(objColValues, devoured, cb) {
    orm.updateOne("burgers", objColValues, devoured, function(res) {
      cb(res);
    });
  },
  delete: function(id, value, cb) {
    orm.delete("burgers", id, value, function(res){
      cb(res);
    })
  }
};

module.exports = burger;