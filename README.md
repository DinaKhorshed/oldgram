# Oldgram

A minimal, Instagram-inspired social feed built with plain HTML, CSS, and JavaScript—no framework or build step. Posts are rendered from a small in-memory list of profiles (name, avatar, location, image, caption, likes). Users can increment likes by tapping the heart or double-clicking a post.

## Features

- Scrollable feed with header, avatars, post images, and captions
- Like counter updates on heart button click or double-click on the post
- Styled with [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) and a light gray page background

## Project layout

| File       | Role                                      |
| ---------- | ----------------------------------------- |
| `index.html` | Page structure and post container       |
| `index.css`  | Layout and visual styles                |
| `index.js`   | Post data, DOM rendering, like handler  |
| `images/`    | Logos, icons, avatars, and post photos  |

## View Live Version

the project is deployed to [netlify](https://oldgram-dhk.netlify.app/) have fun!

## Running locally

Open `index.html` in a browser, or serve the repo root with any static file server (recommended if you hit browser restrictions with `file://` URLs).

Example with Python:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Requirements

Place the asset files expected by `index.js` and `index.html` under `images/` (e.g. `logo.png`, `user-avatar.png`, icons, and the avatar/post JPEGs referenced in the posts array).
