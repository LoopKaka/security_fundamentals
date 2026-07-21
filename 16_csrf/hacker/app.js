const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("", (req, resp) => {
  resp.send("<h1>Hacker Server</h1>");
});

app.get("/offer", (req, resp) => {
  resp.sendFile(__dirname + "/public/offer.html");
});

app.listen(3000, () => {
  console.log("Hacker server is running on http://localhost:3000/");
});
