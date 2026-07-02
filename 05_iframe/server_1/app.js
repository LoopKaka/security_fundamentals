const express = require("express");
const path = require("path");
const app = express();

//Protect Your Website Using CSP header
/*
app.use((req, resp, next) => {
  resp.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
  next();
});
*/

app.use(express.static(path.join(__dirname, "public")));

app.get("", (req, resp) => {
  resp.send("Website Server 1");
});

app.get("/server1/home", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/home.html"));
});

app.get("/server1/bank", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/bank.html"));
});

app.get("/server1/loopkaka", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/loopkaka.html"));
});

app.get("/server1/sandbox", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/public/sandboxExample.html"));
});

app.listen(2000, () => {
  console.log("Server 1 running on http://localhost:2000");
});
