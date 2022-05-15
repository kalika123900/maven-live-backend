const express = require("express");
const api = express.Router();

const userRoutes = require("./user");
const streamRoutes = require("./stream");
const followRoutes = require("./follower");

api.use("/user", userRoutes);
api.use("/stream", streamRoutes);
api.use("/follow", followRoutes);

module.exports = api;
