"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superfan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "fan",
      });
      this.belongsTo(models.User, {
        foreignKey: "creator",
      });
    }
  }
  Superfan.init(
    {
      fan: DataTypes.INTEGER,
      creator: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Superfan",
    }
  );
  return Superfan;
};
