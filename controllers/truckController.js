const express = require("express");
const router = express.Router();
const db = require("../models");

// route to view all trucks in a city
router.get("/truckCityList/:city", (req, res) => {
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

router.get("/operator/:operator_username", (req, res) => {
  db.food_truck
    .findAll({
      where: {
        operator_username: req.params.operator_username,
      },
    })
    .then((cityTrucks) => {
      console.log("trucks here");
      //console.log(cityTrucks[0].operator_username);
      res.render("operator", { food_trucks: cityTrucks });
    })
    .catch((err) => {
      console.log(err);
    });
});

// route to edit a truck
router.put("/api/editTruck/:id", (req, res) => {
  console.log("OVER",req.body, "PARAMS", req.params )
  db.food_truck
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedTruck) => {
      console.log("Updated Truck:", updatedTruck);
      res.json(updatedTruck);
    })
    .catch((err) => {
      console.log(err);
    });
});

//route to display edit page with data
router.get("/editTruck/:id", (req, res) => {
  db.food_truck.findAll({
    where: {
      id: req.params.id,
    }
  }).then(truck => {
    console.log("TRUCK", truck)
    res.render("editTruck", {truck})
  })

 
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
