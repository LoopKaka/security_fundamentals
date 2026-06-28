## Local HTTPS Demo With mkcert For macOS

brew install mkcert
brew install nss
mkcert -install

## 2. Generate a Localhost Certificate

Run this command inside the project folder:

```bash
mkcert localhost 127.0.0.1 ::1
```

## 3. Capture the traffic on macOS:

```bash
sudo tcpdump -A -i lo0 port <<PORT>>
```

## 4. Run application

```bash
npm install
npm run start
```

Uncomment code accordingly
Open HTTP:

```bash
http://localhost:3000/
```

Open HTTPS:

```bash
https://localhost:4000/
```

## 8. Uninstall mkcert and nss for macOS

mkcert -uninstall
brew uninstall mkcert
brew uninstall nss
