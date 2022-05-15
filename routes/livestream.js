const express = require("express");
const router = express.Router();
const { LiveStream } = require("../models");

router.post("/:id", async (req, res, next) => {
  try {
    const liveStream = await LiveStream.findOne({
      where: id,
    });
    res.status(200).send({ data, liveStream, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

router.post("/create/:id", async (req, res, next) => {
  try {
    const {
      appState,
      apiKey,
      streamId,
      playbackId,
      streamKey,
      streamIsActive,
    } = req.body;

    const liveStream = await LiveStream.create({
      creator: req.params.id,
      appState,
      apiKey,
      streamId,
      playbackId,
      streamKey,
      streamIsActive,
    });
    res.status(200).send({ data, liveStream, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

router.post("/make/inactive/:streamId", async (req, res, next) => {
  try {
    const { streamIsActive } = req.body;
    const liveStream = await LiveStream.update({
      streamIsActive,
    });
    res.status(200).send({ data, liveStream, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

module.exports = router;
