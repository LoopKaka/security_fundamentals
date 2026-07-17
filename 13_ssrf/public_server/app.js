const express = require("express");
const axios = require("axios");
const app = express();

app.get("", (req, resp) => {
  resp.send("<h1>Public Server</h1>");
});

// const WHITE_LIST = ["picsum.photos"];
const INTERNAL_IPS = ["localhost", "10.10.10.1", "10.10.10.2", "10.10.10.3"];

app.get("/api/image", async (req, resp) => {
  try {
    const url = new URL(req.query.url);

    // if (!WHITE_LIST.includes(url.hostname)) {
    //   resp.status(403).send("Acces Denied");
    // }

    if (INTERNAL_IPS.includes(url.hostname)) {
      resp.status(403).send("Acces Denied");
    }

    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });

    // Forward the original content type
    resp.set("Content-Type", response.headers["content-type"]);

    resp.send(response.data);
  } catch (err) {
    resp.status(500).send(err.message);
  }
});

app.listen(2000, () => {
  console.log("Server is running on 2000");
});
