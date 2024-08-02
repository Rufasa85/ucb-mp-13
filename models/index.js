const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Traveller.hasMany(Trip, {
  onDelete: "CASCADE",
});
Trip.belongsTo(Traveller);

Location.hasMany(Trip, {
  onDelete: "CASCADE",
});
Trip.belongsTo(Location);

module.exports = {
  Traveller,
  Location,
  Trip,
};
