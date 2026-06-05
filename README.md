# 💌 YUNKY - A Digital Monthsary Gift

A heartfelt, interactive multi-page website created as a digital gift to celebrate a 16th monthsary. Designed with a soft, romantic "glassmorphism" aesthetic, this project serves as a digital scrapbook featuring personal memories, a custom music player, and interactive letters.

**Live Demo:** [View the Website Here](https://multipage-page-monthsary-gift.vercel.app/)

---

## ✨ Features

* **Interactive Envelope Entry:** A welcoming landing page featuring a pure CSS-animated envelope that opens on click, followed by a countdown redirect.
* **Glassmorphism UI:** A modern interface utilizing `backdrop-filter` to create frosted glass cards over a full-screen looping background video.
* **Dynamic Sidebar Navigation:** A responsive sidebar menu built with Vanilla JavaScript that automatically injects across all pages for seamless routing.
* **Masonry Photo Gallery:** A CSS Grid-based gallery with a custom JavaScript modal system that allows users to click and expand images to full screen.
* **Custom Audio Player:** A fully functional, floating music player featuring:
    * Play, pause, next, and previous track controls
    * Interactive progress bar with time formatting
    * Volume slider control
    * Horizontal scrolling featured playlist and vertical tracklist
* **Interactive Memory Notes:** A collection of "pill-shaped" buttons that trigger customized pop-up modals containing short, personalized messages.
* **Scrollable Love Letter:** A dedicated page with a custom-styled webkit scrollbar for long-form reading.

---

## 🛠️ Tech Stack

This project was built entirely without external frameworks or libraries to keep it lightweight and highly customizable.

* **HTML5:** Semantic structure across 6 distinct pages.
* **CSS3:** Flexbox, CSS Grid, custom keyframe animations, UI/UX styling, and responsive design.
* **Vanilla JavaScript (ES6):** DOM manipulation, HTML injection, event listeners, array mapping, and HTML5 Audio API integration.
* **Typography:** [Poppins](https://fonts.google.com/specimen/Poppins) for clean, readable body text and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) for elegant branding.

---

## 📂 Project Structure

```text
├── index.html / css / js      # Landing page with interactive envelope
├── home.html / css            # Main dashboard and welcome message
├── gallery.html / css / js    # CSS Grid photo gallery with modal popups
├── song.html / css / js       # Playlist interface and custom audio player
├── notes.html / css / js      # Interactive timeline notes with modals
├── letter.html / css          # Long-form letter with custom scrollbar
├── nav.css / nav.js           # Reusable sidebar navigation and video background
└── assets/                    # (Images, Audio files, Background videos)
