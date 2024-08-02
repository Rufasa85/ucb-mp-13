const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
  {
    // add properites here, ex:
    budget: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    numTravellers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Trip;
