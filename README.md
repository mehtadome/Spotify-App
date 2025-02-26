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

## Spotipy Authentication

Upon the first and several other runs, you will be redirected to a "Page not found" localhost-based link. Copy the full url and paste it into your backend terminal and hit `[Enter]`.

```
Example URL:
http://localhost/?code=AQATlmNKfPK9Iu8CanjtI4DZPn_uhjH8jc3-_71eM9nBkGr3qp7Q1sNKYOK6X21E91KNT689mR-Dp2Byx-3cKjjvp21uqvz_u6EnRxBz5FrIiItaEhR63g3AD1TKFGeEMCvefnjEZHzCcYLkilCCHjS277wQU_roHG6V3TVlcja6Ud29RkIy
```

This is how Spotipy authenticates the SSO for reading Spotify's API.

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

### Bugs / Issues

Feel free to _**Open an Issue**_ if you find anything wrong, including documentation typos.

### Credits

Please credit me somewhere in your repository description if you use my starter code. It helps me increase my visibility to other students `:)`

© Ruchir Mehta 2025 | All Rights Reserved
