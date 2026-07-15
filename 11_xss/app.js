const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use((req, resp, next) => {
  resp.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
});

app.use(express.json());
app.use(express.static("public"));

// For Stored XSS Demo
// In-memory storage (instead of a database)
const comments = [];

app.get("/api/comments", (req, resp) => {
  resp.json(comments);
});

app.post("/api/comments", (req, resp) => {
  comments.push(req.body.comment);
  resp.json({ message: "Comment Added" });
});

// For Reflected XSS Demo
app.get("/api/search", (req, resp) => {
  const keyword = req.query.keyword || "";
  resp.send(`
        <h1>Search Result</h1>
        <p>
            You searched for:
            ${keyword}
        </p>
        <a href="/reflected">Go Back</a>
    `);
});

// Simple endpoints for HTML render
app.get("", (req, resp) => {
  resp.send("Loopkaka's XSS Video");
});

app.get("/stored", (req, resp) => {
  resp.sendFile(path.join(__dirname, "/public/stored_xss.html"));
});

app.get("/reflected", (req, resp) => {
  resp.sendFile(path.join(__dirname, "/public/reflected_xss.html"));
});

app.get("/dom", (req, resp) => {
  resp.sendFile(path.join(__dirname, "/public/dom_xss.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
