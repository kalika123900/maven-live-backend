const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/create", async (req, res, next) => {
  try {
    const {
      email,
      profileImage,
      name,
      verifiedId,
      verifier,
      typeOfOrigin,
      aggregateVerifier,
    } = req.body;

    const existingUser = await User.findOne({ where: email });
    if (existingUser) {
      return res.status(200).send({ error: null, data, existingUser });
    }

    let user = await User.create({
      email,
      name,
      profileImage,
      verifiedId,
      verifier,
      aggregateVerifier,
      typeOfOrigin,
    });
    return res.status(200).send({ error: null, data, user });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    return res.status(200).send({ data: user, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.messsage });
  }
});

module.exports = router;
