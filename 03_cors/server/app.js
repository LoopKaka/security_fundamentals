const express = require("express");
const cors = require("cors");
const app = express();
/*
const allow_origins = ["http://127.0.0.1:5500", "http://localhost:5500"];

const corsConfig = {
  origin: (origin, callback) => {
    if (allow_origins.indexOf(origin) == -1) {
      callback(new Error("CORS error"));
    } else {
      callback(null, corsConfig);
    }
  },
};*/

const corsConfig = {
  origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  methods: ["GET", "POST", "PUT", "DELTE"],
  headers: ["x-auth"],
  credentials: true,
};

app.use(cors(corsConfig));

app.get("", (req, resp) => {
  resp.send("LoopKaka's Security Fundamental Playlist");
});

app.get("/test", (req, resp) => {
  resp.json({ message: "Hello" });
});

app.post("/post-endpoint", (req, resp) => {
  resp.json({ message: "Hello" });
});

app.listen("3000", () => {
  console.log("Server is running on http://localhost:3000");
});
