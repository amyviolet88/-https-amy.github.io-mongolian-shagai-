# 🎴 Монгол Шагай — Mongolian Shagai Website

Монгол үндэсний хээ угалз бүхий фон дээр дөрвөн бэрх шагайг эргэлдэн харуулдаг, морин хуурын аяыг тоглодог вэбсайт.

A traditional Mongolian **shagai** (anklebone) animation website featuring:
- 🎴 Four shagai bones orbiting inside a golden mandala circle
- 🎵 Morin Khuur (horsehead fiddle) background music
- 🏵️ Authentic Mongolian golden ornamental patterns
- ✨ Smooth CSS orbit animations with hover interactions

---

## 📁 Project Structure

```
mongolian-shagai/
├── index.html          # Main HTML page
├── style.css           # All styles & animations
├── script.js           # Audio + interaction logic
├── README.md           # This file
└── assets/
    ├── mongolian_pattern.jpg   # Background pattern (монгол хээ)
    ├── mori.png                # Морь (horse) shagai
    ├── temee.png               # Тэмээ (camel) shagai
    ├── honi.png                # Хонь (sheep) shagai
    ├── yamaa.png               # Ямаа (goat) shagai
    └── morin_khuur.mp3         # Морин хуурын ая
```

---

## 🚀 Running Locally

No build tools required — pure HTML/CSS/JS.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mongolian-shagai.git
cd mongolian-shagai

# Open directly in browser (double-click) OR use a local server:
npx serve .
# OR
python3 -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

> ⚠️ Audio autoplay is blocked by browsers. Click the **"Морин хуур"** button to start the music.

---

## 🌐 Deploying to GitHub Pages

1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://YOUR_USERNAME.github.io/mongolian-shagai/`

---

## 🎨 Features

| Feature | Description |
|---------|-------------|
| Orbit animation | 4 shagai spin around a central golden mandala |
| Counter-rotation | Each shagai stays upright while orbiting |
| Hover pause | Hovering the circle pauses the animation |
| Parallax | Mouse movement gently shifts the circle |
| Responsive | Works on mobile with adjusted orbit radius |
| Music toggle | Play/pause Morin Khuur background music |

---

## 📜 License

Free to use for personal and educational purposes. Assets are traditional Mongolian cultural heritage.
