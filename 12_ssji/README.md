# 12 SSJI

Express app that demonstrates server-side JavaScript injection using `eval` and `Function`.

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
| `GET` | `/` | Returns a simple SSJI video message |
| `POST` | `/api/eval` | Runs the `input` value from the JSON request body with `eval` |
| `POST` | `/api/function` | Runs the `input` value from the JSON request body with `new Function` |

Example JSON body:

```json
{
  "input": "2 + 2"
}
```

