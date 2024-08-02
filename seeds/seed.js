const sequelize = require("../config/connection");
const { Traveller, Location, Trip } = require("../models");

const travellers = [
  {
    name: "Joey",
    email: "joey@joey.joey",
  },
  {
    name: "Anamaris",
    email: "ana@mar.is",
  },
  {
    name: "Johannes",
    email: "Joh@ann.es",
  },
];

const locations = [
  {
    name: "Belguim",
  },
  {
    name: "Tokyo",
  },
  {
    name: "New Zealand",
  },
];

const trips = [
  {
    budget: 100.23,
    numTravellers: 1,
    LocationId: 1,
    TravellerId: 1,
  },
  {
    budget: 1,
    numTravellers: 4,
    LocationId: 1,
    TravellerId: 2,
  },
  {
    budget: 123.33,
    numTravellers: 4,
    LocationId: 1,
    TravellerId: 1,
  },
];

const seedMe = async () => {
  try {
    await sequelize.sync({ force: true });
    await Traveller.bulkCreate(travellers);
    await Location.bulkCreate(locations);
    await Trip.bulkCreate(trips);
    console.log("success");
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedMe();
