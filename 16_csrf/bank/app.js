const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

function generateCSRFToken() {
  return Math.random();
}

app.get("/login", (req, resp) => {
  resp.cookie("sessionId", "bank_loopkaka12345", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  const csrfToken = generateCSRFToken();

  resp.cookie("csrfToken", csrfToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  resp.send(
    `
      <form action="/transfer" method="POST">
        <input type="hidden" name="csrfToken" value="${csrfToken}"/>
        <input type="text" name="toAccount" placeholder="Enter To Account"/><br/><br/>
        <input type="number" name="amount" placeholder="Enter Amount"/><br/><br/>
        <button type="submit">Transfer</button>
      </form>
    `,
  );
});

app.post("/transfer", (req, resp) => {
  const { toAccount, amount, csrfToken } = req.body;
  const sessionId = req.cookies.sessionId;

  if (!sessionId && sessionId !== "bank_loopkaka12345") {
    return resp.status(401).send("Not logged in");
  }

  const cookieCsrfToken = req.cookies.csrfToken;
  console.log("DOM CSRF Token", csrfToken);
  console.log("Cookie CSRF Token", cookieCsrfToken);
  if (cookieCsrfToken !== csrfToken) {
    return resp.status(403).send("Invalid CSRF Token");
  }

  resp.status(200).send(`Transfer ${amount} to ${toAccount}`);
});

app.get("", (req, resp) => {
  resp.send("<h1>Bank Server</h1>");
});

app.listen(2000, () => {
  console.log("Bank server is running on http://localhost:2000/");
});
