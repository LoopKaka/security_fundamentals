const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("", (req, resp) => {
  resp.send("Website Server 2");
});

app.get("/server2/frame", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/iframe_example.html"));
});

app.listen(3000, () => {
  console.log("Server 2 running on http://localhost:3000");
});
