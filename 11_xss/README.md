# 11 XSS

Express app with stored, reflected, and DOM-based XSS demo pages.

## Prerequisites

- Node.js
- npm

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
   http://localhost:3000
   ```

The server runs on port `3000`. Press `Ctrl+C` in the terminal to stop it.

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Returns a simple XSS video message |
| `GET` | `/stored` | Serves the stored XSS demo page |
| `GET` | `/reflected` | Serves the reflected XSS demo page |
| `GET` | `/dom` | Serves the DOM-based XSS demo page |
| `GET` | `/api/comments` | Returns in-memory comments |
| `POST` | `/api/comments` | Adds a comment from the JSON request body |
| `GET` | `/api/search?keyword=test` | Reflects the `keyword` query parameter in the response |

