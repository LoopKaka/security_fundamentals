const express = require("express");
const app = express();

app.use((req, resp, next) => {
  resp.setHeader("X-Frame-Options", "DENY");
  resp.setHeader("Referrer-Policy", "no-referrer");
  resp.setHeader("X-Content-Type-Options", "nosniff");
  resp.removeHeader("x-powered-by");
  next();
});

app.get("", (req, resp) => {
  resp.send("LoopKaka's Security Fundamental Playlist");
});

app.get("/data", (req, resp) => {
  resp.status(200).json({
    message: "Some data",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
