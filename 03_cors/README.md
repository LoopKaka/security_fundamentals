# CORS Example

This example has two parts:

- `server/`: Express API running on `http://localhost:3000`
- `client/`: HTML page served from VS Code Live Server, usually on `http://127.0.0.1:5500` or `http://localhost:5500`

The server CORS configuration allows requests from Live Server on port `5500`.

## How to Run

### 1. Start the server

Open a terminal from the project root and run:

```bash
cd 03_cors/server
npm install
npm start
```

You should see:

```text
Server is running on http://localhost:3000
```

You can also test the server directly in the browser:

```text
http://localhost:3000/test
```

### 2. Start the client with Live Server

Use the VS Code **Live Server** extension for the client.

1. Open the `03_cors/client/app.html` file in VS Code.
2. Right-click inside the file.
3. Select **Open with Live Server**.
4. The client should open at a URL like:

```text
http://127.0.0.1:5500/03_cors/client/app.html
```

or:

```text
http://localhost:5500/03_cors/client/app.html
```

### 3. Test the CORS request

1. Keep the server running on `http://localhost:3000`.
2. Open the client through Live Server.
3. Click the **API CALL** button.
4. Open the browser developer console.
5. You should see the API response:

```text
Result { message: "Hello" }
```

If the client is opened directly from the file system, for example with a `file://` URL, CORS behavior may not match this example. Use Live Server so the client runs from `localhost:5500`.
