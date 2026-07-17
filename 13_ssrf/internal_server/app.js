const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send("<h1>Internal Server</h1>");
});

app.get("/data", async (req, resp) => {
  resp.json({ data: "Some internal data" });
});

app.listen(4000, () => {
  console.log("Server is running on 4000");
});
