const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("", (req, resp) => {
  resp.sendFile(path.join(__dirname, "public/home.html"));
});

app.post("/api/form-submit", async (req, resp) => {
  console.log("\n\n data", req.body);

  if (!validation(req.body)) {
    resp.status(400).send("Invalid input");
  }

  // TODO: Insert into Database

  resp.json({ message: "Form submitted successfully" });
});

app.listen(2000, () => {
  console.log("Server is running on 2000 port");
});

function validation(data) {
  const { username, email, age, mobile, gender } = data;

  if (!/^[a-z0-9]+$/.test(username) && username.length > 9) {
    return false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return false;
  }

  if (age < 0 || age > 50) {
    return false;
  }

  if (!/^\d{10}$/.test(mobile)) {
    return false;
  }

  if (!["Male", "Female"].includes(gender)) {
    return false;
  }

  return true;
}
