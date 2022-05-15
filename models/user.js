"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Follower, {
        foreignKey: "followed",
      });
      this.hasMany(models.Follower, {
        foreignKey: "follower",
      });
      this.hasMany(models.LiveStream, {
        foreignKey: "creator",
      });
      this.hasMany(models.Superfan, {
        foreignKey: "fan",
      });
      this.hasMany(models.Superfan, {
        foreignKey: "creator",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hexa: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      verifiedId: DataTypes.STRING,
      verifier: DataTypes.STRING,
      typeOfOrigin: DataTypes.STRING,
      aggregateVerifier: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
