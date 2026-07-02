# Iframe Security Demo

This project contains two separate Node.js Express apps:

- `server_1` runs on `http://localhost:2000`
- `server_2` runs on `http://localhost:3000`

Run both apps at the same time in two separate terminal windows or tabs.

## Prerequisites

- Node.js
- npm

## Install Dependencies

Install dependencies once for each server:

```bash
cd server_1
npm install
```

```bash
cd server_2
npm install
```

## Run Server 1

From the project root:

```bash
cd server_1
npm start
```

Server 1 will start at:

```text
http://localhost:2000
```

Useful Server 1 routes:

- `http://localhost:2000/server1/home`
- `http://localhost:2000/server1/bank`
- `http://localhost:2000/server1/loopkaka`
- `http://localhost:2000/server1/sandbox`

## Run Server 2

Open a second terminal tab/window, then run:

```bash
cd server_2
npm start
```

Server 2 will start at:

```text
http://localhost:3000
```

Useful Server 2 routes:

- `http://localhost:3000/server2/home`
- `http://localhost:3000/server2/offer`
- `http://localhost:3000/server2/theaf`
- `http://localhost:3000/server2/mywebsite`

## Stop the Servers

Press `Ctrl + C` in each terminal where a server is running.
