const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
  const authorizationHeader = req.headers && req.headers["authorization"];
  const streamId = req.body.stream_id;

  try {
    const streamStatusResponse = await axios.get(
      `https://livepeer.com/api/stream/${streamId}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: authorizationHeader, // API Key needs to be passed as a header
        },
      }
    );

    res.send(streamStatusResponse.data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const api_key = req.body.api_key;
    const livepeerKey = api_key;
    const AuthStr = "Bearer ".concat(livepeerKey);

    let streamData = {
      name: `Testing`,
      profiles: [
        {
          name: "720p",
          bitrate: 2000000,
          fps: 30,
          width: 1280,
          height: 720,
        },
        {
          name: "480p",
          bitrate: 1000000,
          fps: 30,
          width: 854,
          height: 480,
        },
        {
          name: "360p",
          bitrate: 500000,
          fps: 30,
          width: 640,
          height: 360,
        },
      ],
    };

    const value = await axios({
      method: "post",
      url: "https://livepeer.com/api/stream",
      data: streamData,
      headers: {
        "content-type": "application/json",
        Authorization: AuthStr,
      },
    });
    res.send(value.data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
