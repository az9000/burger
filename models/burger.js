const orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.get("*", "burgers", null, null, function(res) {
      cb(res);
    });
  },
  create: function(cols, values, cb) {
    orm.create("burgers", cols, values, function(res) {
      cb(res);
    });
  },
  update: function(objColValues, devoured, cb) {
    orm.update("burgers", objColValues, devoured, function(res) {
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