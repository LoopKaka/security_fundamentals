# Permission Policy Node App

This project contains two small Express servers used to demonstrate browser
permission policy behavior.

## Prerequisites

- Node.js
- npm

## Install dependencies

Install dependencies separately for each server:

```bash
cd server_1
npm install
```

```bash
cd ../server_2
npm install
```

## Run the app

Open two terminal windows from the project root.

In the first terminal, start server 1:

```bash
cd server_1
npm start
```

Server 1 runs at:

```text
http://localhost:2000
http://localhost:2000/server1/home
```

In the second terminal, start server 2:

```bash
cd server_2
npm start
```

Server 2 runs at:

```text
http://localhost:3000
http://localhost:3000/server2/frame
```

## Stop the servers

Press `Ctrl + C` in each terminal.
