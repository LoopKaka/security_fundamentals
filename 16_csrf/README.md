# CSRF Demo: Bank and Hacker Express Apps

This project contains two small Express applications used to demonstrate CSRF behavior.

- `bank/`: the victim bank server running on `http://localhost:2000`
- `hacker/`: the attacker server running on `http://localhost:3000`

## Prerequisites

- Node.js
- npm

## Install Dependencies

Install dependencies in both project folders:

```sh
cd bank
npm install
```

```sh
cd ../hacker
npm install
```

If you are starting from the repository root, you can also run:

```sh
cd bank
npm install
cd ../hacker
npm install
```

## Run the Bank Server

Open a terminal from the repository root and run:

```sh
cd bank
npm start
```

The bank server starts at:

```txt
http://localhost:2000
```

Useful routes:

- `GET /` shows the bank server home page
- `GET /login` sets the `sessionId` and `csrfToken` cookies, then shows a transfer form
- `POST /transfer` processes the transfer only when the session cookie and CSRF token are valid

## Run the Hacker Server

Open a second terminal from the repository root and run:

```sh
cd hacker
npm start
```

The hacker server starts at:

```txt
http://localhost:3000
```

Useful routes:

- `GET /` shows the hacker server home page
- `GET /offer` shows a fake offer form that posts to the bank transfer endpoint

## Demo Flow

1. Start the bank server.
2. Start the hacker server.
3. Open `http://localhost:2000/login`.
4. Submit the bank form once to see a valid transfer.
5. Open `http://localhost:3000/offer`.
6. Click the offer button to submit a cross-origin request to the bank server.

## SameSite Note for Localhost

`localhost:2000` and `localhost:3000` are different origins because the ports are different, but they are still the same site because the scheme and host are the same:

```txt
http://localhost
```

Cookies are not isolated by port. That means a cookie set by `localhost:2000` can still be available when the browser sends a request to `localhost:2000`, even if the page that caused the request was loaded from `localhost:3000`.

To test a true cross-site CSRF case, use different hostnames, for example:

```txt
http://victim.test:2000
http://attacker.test:3000
```

Add them to your hosts file:

```txt
127.0.0.1 victim.test
127.0.0.1 attacker.test
```

Then update the URLs in the demo if needed.
