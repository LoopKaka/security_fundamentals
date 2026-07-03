const express = require("express");
const path = require("path");
const app = express();

app.use((req, resp, next) => {
  resp.setHeader(
    "Permissions-Policy",
    "geolocation=(self 'http://localhost:3000/')",
  );
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("", (req, resp) => {
  resp.send("Website Server 1");
});

app.get("/server1/home", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/home.html"));
});

app.listen(2000, () => {
  console.log("Server 1 running on http://localhost:2000");
});
