# 13 SSRF

SSRF demo with two Express apps:

- `public_server` runs on port `2000`
- `internal_server` runs on port `4000`

## Prerequisites

- Node.js
- npm

## How to Run

Open two terminals.

In terminal 1, start the internal server:

```bash
cd internal_server
npm install
npm start
```

In terminal 2, start the public server:

```bash
cd public_server
npm install
npm start
```

Then open the public server in your browser:

```text
http://localhost:2000
```

Press `Ctrl+C` in each terminal to stop the servers.

## Public Server Endpoints

Base URL:

```text
http://localhost:2000
```

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Returns a simple public server message |
| `GET` | `/api/image?url=https://example.com/image.png` | Fetches the URL from the `url` query parameter and returns the response body |

## Internal Server Endpoints

Base URL:

```text
http://localhost:4000
```

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | Returns a simple internal server message |
| `GET` | `/data` | Returns sample internal JSON data |

