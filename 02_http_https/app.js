const express = require("express");
const https = require("https");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, resp) => {
  console.log(req.body);
  resp.send("Login Successs");
});

app.get("", (req, resp) => {
  resp.send("LoopKaka's Security Fundamental Playlist");
});

https
  .createServer(
    {
      key: fs.readFileSync(""), //TODO: Change filename
      cert: fs.readFileSync(""), //TODO: Change filename
    },
    app,
  )
  .listen(4000);

// app.listen("3000", () => {
//   console.log("Server is running on 3000");
// });
