const express = require("express");
const router = express.Router();
const { Traveller, Trip, Location } = require("../models");

router.get("/", (req, res) => {
  Traveller.findAll()
    .then((dbTravellers) => {
      res.json(dbTravellers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});
router.get("/:id", (req, res) => {
  Traveller.findByPk(req.params.id, {
    include: [
      {
        model: Trip,
        include: Location,
      },
    ],
  })
    .then((dbTraveller) => {
      if (!dbTraveller) {
        return res.status(404).json({ msg: "no such traveller" });
      }
      res.json(dbTraveller);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.post("/", (req, res) => {
  Traveller.create({
    name: req.body.name,
    email: req.body.email,
  })
    .then((newTraveller) => {
      res.json(newTraveller);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

router.delete("/:id", (req, res) => {
  Traveller.destroy({
    where: {
      id: req.params.id,
    },
  }).then((delTraveller) => {
    if (!delTraveller) {
      return res.status(404).json({ msg: "no such traveller" });
    }
    res.json(delTraveller);
  });
});

module.exports = router;
