const express = require("express");
const path = require("path");
const mysql = require("mysql2/promise");

const pool = connectWithDB();
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("", (req, resp) => {
  resp.sendFile(path.join(__dirname, "/public/home.html"));
});

app.post("/api/login", async (req, resp) => {
  const { username, password } = req.body;

  try {
    // Try query : '' OR '1'='1 --
    /*const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}';`;
    console.log("QUERY : ", query);
    const [rows] = await pool.query(query);*/

    const query = `SELECT * FROM users WHERE username=? AND password=?;`;
    const [rows] = await pool.execute(query, [username, password]);

    if (rows.length > 0) {
      resp.status(200).json({ message: "Login Success", userId: rows[0].id });
    } else {
      resp.status(401).json({ message: "Incorrect Username/Password" });
    }
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

app.get("/api/products", async (req, resp) => {
  const { product_id } = req.query;

  try {
    // Try: http://localhost:2000/api/products?product_id=1 UNION select username, password from users;
    /*const query = `SELECT name, descrption FROM products WHERE id=${product_id}`;
    console.log("QUERY : ", query);
    const [rows] = await pool.query(query);*/

    const query = `SELECT name, descrption FROM products WHERE id=?`;
    const [rows] = await pool.execute(query, [product_id]);

    resp.status(200).json({ data: rows });
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

const PORT = 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect with MYSQL DB
function connectWithDB() {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Test12345",
    database: "loopkaka",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return pool;
}
