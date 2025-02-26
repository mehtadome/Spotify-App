# Getting Started with Spotify API

This quick tutorial should give you everything you need to get started with Spotify API. Ensure you finished **Step 1** on [Getting Started Tutorial](https://developer.spotify.com/documentation/web-api/tutorials/getting-started).

- If you're opening this file in VSCode. Right click the file banner and `Open Preview` or `[Cmd + Shift + V]`.

URI = Uniform Resource Indicator

### Pre-requisites

> [Python 3.12](https://www.python.org/downloads/)

> [Spotify Account](https://open.spotify.com/)

> [Github](https://github.com/)

## Installation Instructions

First, you need to create a virtual environment which will save all dependencies for your application in one place.

- [Python Virtual Environments](https://realpython.com/python-virtual-environments-a-primer/#why-do-you-need-virtual-environments)

Update pip, your Python library installing module.

```
python3 -m pip install --upgrade pip
```

Create a virtual environment in the root folder of your project. For this tutotial it is `./Spotify App/`.

```
python3 -m venv .venv
```

- Creates a virtual environment named `.venv`.

Activate the virtual environment.

**MacOS**

```
source .venv/bin/activate
```

**Windows**

```
. ./venv/bin/activate
```

### Using `venv`

If successfully activated, your shell should have the prefix `(.venv)`.

Update pip for the virtual environment.

```
pip install --upgrade pip
```

Install dependencies. You will create a file called `requirements.txt` and place each library name in it.

```
pip install -r requirements.txt
```

- Pip will ensure all dependencies listed in `requirements.txt` are installed into your virtual environment.

**Important**: As you update the application and add more dependencies to your venv, make sure they are listed in `requirements.txt`.

- This will ensure builds on different machines don't crash.

You can deactivate the venv when done with `deactivate` but don't do it right now.

### `.gitignore`

You will create a file called `.gitignore` which tells Git what files to ignore when pushing to your repository. You populate the file with paths of local files.

You do this so that you don't push secrets or your entire venv (full of costly dependencies) to your repository.

### `.env`

Create your `.env` file and populate it with:

```
CLIENT_ID='id here'
CLIENT_SECRET='secret here'
REDIRECT_URI='http://localhost'
```

- You will be able to find `client_id` and `client_secret` in the setting for your Spotify Developer application.

### Start Backend

You will run the file **while still inside the virtual environment** with:

**MacOS Terminal**

```
python App.py
```

**VSCode Built-in Terminal**

```
python App.py
```

You may need to manually set VSCode's Python Interpreter to use venv. Do so with `[Cmd + P]`, "> Python: Select Interpreter".

- This doesn't always work, so don't worry if not. It'll just give in-line dependency warnings.

If you have somehow survived all this time without learning how to use the `Windows Command Prompt` or `MacOS Terminal`, I highly suggest you learn the following:

- Create directory, move to directory.
- Run files.
- View files.

## Breakdown of how the App works

I have set up some starter code in `App.py` which will implements some basic features.

### Structure

It is very important to modulate your code. Throwing everything in one or two files is **_NOT_** good practice. You want to take the time to plan and structure your code such that each function does only what it needs.

Break down features in separate folders specializing in that vertical.

- Configurations should be in config.
- Settings in settings.
- User profiles in profiles.
- Images in images.
- Etc.

Modulating your code helps as your code becomes more advanced. Building in error handling at each individual feature prevents massive time lost debugging in the future.

### `App.py`

Ideally, `App.py` is the topmost route for your app and holds bare code, simply redirecting users to your landing page and calling the appropriate nested modules to handle starter logic.

Look into getting started with [Flask](https://flask.palletsprojects.com/en/stable/) for Python WebDev.

### `Tests.py`

This file can be run separately through terminal to test authentication to Spotify works in the first place.

### Authorization Methods

> The foundation of anything you do with Spotify API relies on an authenticated session object.

To authorize your app to use the Spotify API, `spotipy` offers an _OAuth_ and _Client Credentials_ method.

**OAuth** allows the user using the app to SSO into Spotify and allows you, the developer, to query much more information about them.

**Client Credentials** is an alternative that marks to Spotify that your app is to be trusted but you are limited in what you can query about a user.

[More info](https://developer.spotify.com/documentation/web-api/concepts/authorization)

### Try Excepts

You want to scope your exception blocks such that it handles only what that scope is trying. In `Settings/authorization_ex_1.py`, the except block only cares about credential validity.

A layer higher in `App.py`, when running the function from `auth1`, we care about catching different errors, ie:

- Index out of bounds
- Null values
- Parsing issues

### Print Statements

Try to include many print statements when developing your code to allow for easier debugging of problems. Include manual spacing with `\n` to enhance readability.

### Common Errors

When working with virtual environments, it is not uncommon for VSCode's Python interpreter to be unable to connect dependencies within the `.venv` to its own scope, so errors such as:

- `Import "dotenv" could not be resolved`, even though it is correctly installed.

# Appendix

[Official Spotify Documenation](https://developer.spotify.com/)

> Highly Recommend what you want your app to do is supported by their API.

Follow this guide for getting URIs of known artists: [Guide](https://github.com/spotipy-dev/spotipy/blob/2.22.1/TUTORIAL.md#step-3-start-using-spotipy)

How to start conducting analysis for app: [Analysis](https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks)

Interesting Info on Spotify API Cons: [# of times a song was played](https://www.qqtube.com/blog/how-to-see-how-many-times-i-played-a-song-on-spotify)

Authorization Concepts: [Concepts](https://developer.spotify.com/documentation/web-api/concepts/authorization)
