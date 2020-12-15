const express = require("express");
const router = express.Router();
const db = require("../models");

// route to view all trucks in a city
router.get("/cityselector/:city", (req, res) => {
  db.food_truck
    .findAll({
      where: {
        city: req.params.city,
      },
    })
    .then((cityTrucks) => {
      console.log(cityTrucks);
      res.render("truckCityList", { food_trucks: cityTrucks });
    })
    .catch((err) => {
      console.log(err);
    });
});

// route to edit a truck
router.put("/api/editTruck/:id", (req, res) => {
  db.food_truck
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedTruck) => {
      res.json(updatedTruck);
    })
    .catch((err) => {
      console.log(err);
    });
});

// route to delete a truck
router.delete("/api/operator/:id", (req, res) => {
  db.food_truck
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

// route to create a truck
router.post("/api/createTruck", (req, res) => {
  db.food_truck
    .create(req.body)
    .then((newTruck) => {
      res.json(newTruck);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
