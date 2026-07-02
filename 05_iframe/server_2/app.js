const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("", (req, resp) => {
  resp.send("Website Server 2");
});

app.get("/server2/home", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/home.html"));
});

app.get("/server2/offer", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/offer.html"));
});

app.get("/server2/theaf", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/theaf.html"));
});

app.get("/server2/mywebsite", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/myWebsite.html"));
});

app.listen(3000, () => {
  console.log("Server 2 running on http://localhost:3000");
});
