# 10 SQL Injection

Express app that serves a login/product demo and connects to a MySQL database.

## Prerequisites

- Node.js
- npm
- MySQL running locally

## Database Setup

Run the SQL script before starting the app:

```bash
mysql -u root -p < query.sql
```

The app currently connects with these local MySQL settings in `app.js`:

```text
host: localhost
user: root
password: Test12345
database: loopkaka
```

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

3. Open the app in your browser:

   ```text
   http://localhost:2000
   ```

The server runs on port `2000`. Press `Ctrl+C` in the terminal to stop it.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Serves `public/home.html` |
| `POST` | `/api/login` | Checks `username` and `password` from the JSON request body |
| `GET` | `/api/products?product_id=1` | Returns products matching the `product_id` query parameter |

