const express = require("express");
const router = express.Router();
const { Follower } = require("../models");

router.post("/create", async (req, res, next) => {
  try {
    const { follower, followed } = req.body;
    const follow = await Follower.create({
      follower,
      followed,
    });
    return res.status(200).send({ data: follow, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

router.get("/count/:id", async (req, res, next) => {
  try {
    const followersCount = Follower.count({
      where: { followed: req.params.id },
    });
    return res
      .status(200)
      .send({ data: { count: followersCount }, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

module.exports = router;
