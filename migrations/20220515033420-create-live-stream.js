"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("LiveStreams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      creator: {
        type: Sequelize.INTEGER,
      },
      appState: {
        type: Sequelize.STRING,
      },
      apiKey: {
        type: Sequelize.STRING,
      },
      streamId: {
        type: Sequelize.STRING,
      },
      playbackId: {
        type: Sequelize.STRING,
      },
      streamKey: {
        type: Sequelize.STRING,
      },
      streamIsActive: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("LiveStreams");
  },
};
