# Spotify Full-Stack Application

For detailed breakdown of full-stack application logic, in order read:

- `./backend/` [README.md](./backend/README.md)
- `./frontend/` [README.md](./frontend/README.md)

### Terminal 1 - Start Flask

```
cd backend
. .venv/bin/activate
python App.py
```

### Terminal 2 - Start Vite

```
cd frontend
npm install
npm run dev
```

## If App broken

In the following order, stop and start services:

Also, make sure to clear browser cache with **"Empty Cache and Hard Reload"**.

1. Open Developer Tools (F12).
2. Right-click refresh button.

### Stop all services

```
# Stop Flask server (Ctrl+C)
# Stop your Vite server (Ctrl+C)
```

### Start Flask

```
cd backend
. .venv/bin/activate
python App.py
```

### Start Vite

```
cd frontend
npm run dev
```

# Appendix

### Credits

Please credit me somewhere in your starter README.md if you use my starter code. It helps me increase my visibility to other students `:)`

© Ruchir Mehta | All Rights Reserved
