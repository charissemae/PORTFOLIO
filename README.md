# Charisse Mae Mendoza — Personal Portfolio

A responsive personal portfolio website built with **HTML5, CSS3, and Vanilla JavaScript** (no frameworks or libraries). The site follows an enchanted forest / fantasy aesthetic and dynamically generates its repeated content — navigation links, hobby entries, and contact entries — using JavaScript arrays of objects and looping techniques instead of hard-coding them into the HTML.

## 🔗 Live Site

_Add your GitHub Pages link here once enabled (see below), e.g.:_
`https://your-username.github.io/portfolio/`

## ✨ Features

- **Sections:** Navigation Bar, Hero, About Me, Hobbies, Contact Me, Footer
- **Dynamic content:** nav links, hobby entries, and contact entries are all generated at runtime with `forEach()`, `for...of`, and a classic `for` loop, using `createElement` / `appendChild`
- **Fantasy / enchanted theme:** gold, wine, and sage palette, Cinzel + Cormorant Garamond typography, glassmorphism panels, a rotating sigil frame, and drifting firefly particles
- **Profile portrait** framed inside the hero sigil
- **Ambient background music** — a seamless looping magical soundtrack, played/paused with the note button in the corner
- **Fully responsive** — desktop, tablet, and mobile, with a mobile hamburger menu
- **Smooth scrolling** from the hero button to the Contact section

## 📁 Project Structure

```
portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    │   └── profile.jpg
    └── audio/
        └── enchanted-ambience.wav
```

## 🚀 Running Locally

No build step or install needed — it's plain HTML/CSS/JS.

1. Download or clone this repository.
2. Keep the folder structure intact (the `css/`, `js/`, and `assets/` folders must stay next to `index.html`).
3. Open `index.html` directly in your browser.

## 🌐 Hosting on GitHub Pages

1. Push this repository to GitHub, keeping the folder structure above.
2. Go to the repo's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
5. Wait a minute, then refresh — GitHub will show your live URL at the top of that page.

## 🛠️ Built With

- HTML5 (semantic elements)
- CSS3 (Grid, Flexbox, glassmorphism, animations)
- Vanilla JavaScript (DOM manipulation, no frameworks)

## 📄 License

This project was created for educational purposes as a university assignment.
