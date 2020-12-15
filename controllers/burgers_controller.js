const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    var hbsObject = {
      burger_name: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(400).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;