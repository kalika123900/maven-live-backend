"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LiveStream extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "creator",
      });
    }
  }
  LiveStream.init(
    {
      creator: DataTypes.INTEGER,
      appState: DataTypes.STRING,
      apiKey: DataTypes.STRING,
      streamId: DataTypes.STRING,
      playbackId: DataTypes.STRING,
      streamKey: DataTypes.STRING,
      streamIsActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "LiveStream",
    }
  );
  return LiveStream;
};
