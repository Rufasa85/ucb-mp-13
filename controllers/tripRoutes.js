const express = require("express");
const router = express.Router();
const { Traveller, Trip, Location } = require("../models");

router.post("/", (req, res) => {
  Trip.create({
    budget: req.body.budget,
    numTravellers: req.body.numTravellers,
    LocationId: req.body.LocationId,
    TravellerId: req.body.TravellerId,
  })
    .then((newTrip) => {
      res.json(newTrip);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.delete("/:id", (req, res) => {
  Trip.destroy({
    where: {
      id: req.params.id,
    },
  }).then((delTrip) => {
    if (!delTrip) {
      return res.status(404).json({ msg: "no such trip" });
    }
    res.json(delTrip);
  });
});

module.exports = router;
