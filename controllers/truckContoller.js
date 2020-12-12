const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../models");

// route to view all trucks in a city
router.get("/cityselector/:city", (req, res) => {
    db.food_truck.findAll({
        where: {
            location: req.params.city
        }
    }).then((cityTrucks) => {
        console.log(cityTrucks);
        res.render("foodTrucks", {foodTrucks: cityTrucks});
    }).catch((err) => {
        console.log(err);
    });
});

// route to edit a truck



// route to delete a truck
router.delete("/api/operator/:id", (req, res) => {
    db.food_truck.destroy({
        where: {
            id: req.params.id,
        },
    }).then((response) => {
        console.log(response);
        res.json(response);
    }).catch((err) => {
        console.log(err);
    });
});


// route to create a truck
router.post.apply("/api/createTruck", (req, res) => {
    db.food_truck.create(req.body)
    .then((newTruck)=> {
        req.json(newTruck);
    }).catch((err) => {
        console.log(err);
    });
});