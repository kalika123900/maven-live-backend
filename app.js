const express = require("express");
const app = express();
// sdf

const port = process.env.PORT || 9000;
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/public", express.static("public"));

app.post("/create-stream", async (req, res) => {
  const api_key = req.body.api_key;

  try {
    // const livepeerKey = process.env.LIVEPEER_KEY;
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

app.post("/stream", async (req, res) => {
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

app.listen(port, () => {
  console.log(`server is listening on Port  ${port}`);
});
