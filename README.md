# Dave Hickey — Tribute Site

A small interactive tribute to **Dave Hickey** (1939–2021), the influential American art critic, essayist, and cultural provocateur known for his writing on beauty, democracy, and the market in contemporary art.

## Overview

The site presents biographical and critical text about Hickey with a distinctive interactive flourish: hovering over highlighted names or phrases reveals portrait photographs that follow the cursor across the page. Clicking locks the image in place at full size. The interaction echoes Hickey's own interest in the sensory and emotional dimensions of looking.

## Features

- **Cursor-following image reveal** — portrait photos of Hickey and associates appear on hover and track mouse movement
- **Click-to-fullscreen** — clicking a hovered image expands it to fill the viewport
- **jQuery-driven interactions** — `mouseenter`, `mousemove`, and `click` handlers in `assets/js/app.js`

## Tech Stack

- **Vanilla HTML / CSS** — single-page layout
- **jQuery** — hover, mouse tracking, and click interactions

## Running Locally

```bash
npx serve .
```
