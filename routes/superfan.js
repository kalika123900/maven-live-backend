const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const { Superfan } = require("../models");

router.post("/create", async (req, res, next) => {
  try {
    const { fan, creator } = req.body;
    const superfanCreated = await Superfan.create({
      fan,
      creator,
    });
    return res.status(200).send({ data: superfanCreated, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

router.get("/count/:id", async (res, res, next) => {
  try {
    const superfanCount = Superfan.count({
      where: { creator: req.params.id },
    });
    return res
      .status(200)
      .send({ data: { count: superfanCount }, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

module.exports = router;
