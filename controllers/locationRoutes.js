const express = require("express");
const router = express.Router();
const { Traveller, Trip, Location } = require("../models");

router.get("/", (req, res) => {
  Location.findAll()
    .then((dbLocations) => {
      res.json(dbLocations);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.get("/:id", (req, res) => {
  Location.findByPk(req.params.id, {
    include: [
      {
        model: Trip,
        include: Traveller,
      },
    ],
  })
    .then((dbLocation) => {
      if (!dbLocation) {
        return res.status(404).json({ msg: "no such location" });
      }
      res.json(dbLocation);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.post("/", (req, res) => {
  Location.create({
    name: req.body.name,
  })
    .then((newLocation) => {
      res.json(newLocation);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.delete("/:id", (req, res) => {
  Location.destroy({
    where: {
      id: req.params.id,
    },
  }).then((delLocation) => {
    if (!delLocation) {
      return res.status(404).json({ msg: "no such Location" });
    }
    res.json(delLocation);
  });
});

module.exports = router;
