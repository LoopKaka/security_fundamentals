const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("", (req, resp) => {
  resp.send("<h1>LoopKaka's SSJI Video</h1>");
});

app.post("/api/eval", (req, resp) => {
  const userInput = req.body.input;

  const result = eval(userInput);

  resp.json({
    result,
    userInput,
    type: typeof userInput,
  });
});

app.post("/api/function", (req, resp) => {
  const userInput = req.body.input;

  const myFun = new Function(userInput);
  const result = myFun();

  resp.json({
    result,
    userInput,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
