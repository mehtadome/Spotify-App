# Getting Started with UI

To setup our UI, we're going to use _modern_ frameworks:

> [Vite](https://vite.dev/) > [TypeScript + SWC](https://medium.com/@amirakhaled2027/typescript-vs-typescript-swc-in-vite-understanding-the-differences-7240e7309ca7)

**Vite** is the modern _Create React App_ or _Next JS_.

**TypeScript** is the newly favored enhancement of _JavaScript_ but is still compiled in JavaScript. It adds static typing which developers favor because:

- (+) Easier to debug, less issues as application scales.

* (-) Longer to implement.

**SWC** is a Rust-based compiler which is faster than the normal _tsc_ compiler.

## Installation Instructions

This guide will set you up a basic frontend powered with Vite.

If not already done, create a folder `frontend` and `cd` into it.

```
mkdir frontend && cd frontend/
```

### Pre-requisites

[**NPM**](https://www.npmjs.com/) or **Node Package Manager** is the standard module installer for **[Node.js](https://nodejs.org/en)**. I can't begin to explain its significance here so please read up separately.

To verify Node.js was installed properly, run the below in your terminal:

```
node -v
```

NPM comes packaged with Node.js install. Update and verify its installation with:

```
npm install -g npm
npm -v
```

### Create a Vite App

To create a Vite app with TypeScript + SWC:

> You don't need to do this right now as it was already done on my end.

- I recommend you do it on the side to understand the process.

```
npm create vite@latest . -- --template react-swc-ts
```

- More information [here](https://vite.dev/guide/#scaffolding-your-first-vite-project).

Your folder should now be populated with _[boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code)_ starter code.

### Run Frontend App

To install the dependencies to run the frontend, do:

```
npm install
```

You'll use the following command to compile scripts and run your frontend:

```
npm run dev
```

When you're ready to run in production, you'll run the following to compile and _minify_ scripts.

- **Minification** reduces the size of a script file by removing unnecessary characters like whitespace, comments, and line breaks, while still maintaining its functionality.

```
npm run prod
```

- We're not ready yet so don't run this.

## Breakdown of how Frontend App works

`package.json` is where you define all your dependencies and custom scripts in [`JSON`](https://www.json.org/json-en.html) format.

`package-lock.json` is a read-only file which is built when you run `npm install`. It links your dependencies in `node_modules` to your code's logic by the compiler.

In Node.js applications, your code resides in `src` and other user-created module folders.

### File Structure

`components` is where your UI functions go.

In React.js, your visuals are called [function components](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/).

`pages` are where separate pages should be located (not setup as such right now).

# Connect to Backend

### Important Note

Please make sure both apps are running locally. You must have started the Flask development server and the Vite server with:

```
# Backend
python App.py      # must be in .venv

# Frontend
npm run dev
```

Now with the backend and frontend setup, we need to connect the two together. To do so, we have a basic API setup. Here's how it works:

1. We type our Spotify username into a form and click submit.
2. Vite ingests your username and forwards it to an endpoint we have setup on Flask at `localhost:5000/api/favorites/<username>`.
3. Flask receives your name, makes a [_GET_](https://www.w3schools.com/tags/ref_httpmethods.asp) request to Spotify API through `spotipy`, and returns a JSON response and the [HTTP Code 200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) to signify successful communication.
4. Vite, using an [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) TypeScript function, parses the response and displays your recently liked songs and created playlists.

**Note**: Check out what is configured in `vite.config.ts`.
