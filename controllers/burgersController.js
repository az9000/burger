var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// routes

// show ALL burgers
router.get("/", function(req, res) {
  burger.all(function(result) {
    var burgers = [];
    var devoured_burgers = [];
    for (var i in result) {
      if (result[i].devoured === 1) {
        devoured_burgers.push(result[i]);
      } else {
        burgers.push(result[i]);
      }
    }
    res.render("index", {
      burgers: burgers,
      devoured_burgers: devoured_burgers
    });
  });
});

// create a new burger
router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  const burger_name = req.body.burger_name;
  const devoured = req.body.devoured === "true";
  burger.create(["burger_name", "devoured"], [burger_name, devoured], function(
    result
  ) {
    res.json({ id: result.insertId });
  });
});

// update a burger (devoured or not)
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", function(req, res) {
  burger.delete("id", req.params.id, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
