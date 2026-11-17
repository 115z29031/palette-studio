# Palette Studio 🎨

A modern, elegant color discovery website designed for artists, illustrators, graphic designers, and creative minds seeking beautiful color combinations for their artwork and projects.

Built following all specifications in [`AGENTS.md`](AGENTS.md).

---

## ✨ Features

1. **Homepage & Studio Introduction**
   - Clean, minimalist aesthetic inspired by modern creative design studios.
   - An interactive spotlight showing a **Featured Palette** with instant 1-click copy and a button to cycle palettes.

2. **Random Palette Generator (5 Colors)**
   - Generates five-color harmonies dynamically or from curated sets.
   - **Click-to-Copy:** Click any color swatch or its HEX code to instantly copy it to your clipboard.
   - **Color Locking:** Click the lock icon on any swatch to keep that color while generating new companion tones around it.
   - **Keyboard Shortcut:** Press <kbd>Spacebar</kbd> anywhere on the page to quickly roll a new palette.
   - **Copy All:** One-click button to copy all five HEX codes at once.

3. **Mood Categories**
   Curated five-color harmonies classified into expressive moods:
   - **Dreamy** — ethereal purples, soft cloudy lavenders, and twilight pinks
   - **Cozy** — warm knits, fireside ambers, terracotta, and spiced cider
   - **Romantic** — blush peony, dusty rose, Parisian sunsets, and crimson velvet
   - **Peaceful** — quiet sage, morning mist, botanical greens, and calm lagoon waters
   - **Mysterious** — midnight indigo, deep abyssal teals, and shadowy orchids
   - **Energetic** — citrus punch, electric carnivals, solar flares, and Mediterranean sun

4. **Color Styles**
   Filter and explore palettes by aesthetic style:
   - **Pastel**
   - **Earthy**
   - **Vibrant**
   - **Muted**
   - **Monochromatic**

5. **Favorites & Local Storage Persistence**
   - Save your favorite palettes by clicking the heart icon on any card or in the generator.
   - Saved palettes are preserved across page reloads using browser `localStorage`.
   - Dedicated **Saved Favorite Palettes** section with options to copy individual colors, copy all colors, open any palette back into the Generator studio, or remove palettes.
   - Live badge counter in the navigation showing the number of saved favorites.

6. **Responsive & Accessible Design**
   - Fully responsive on mobile phones, tablets, and desktop computers.
   - Accessible button states, focus outlines, and screen-reader labels.
   - Zero external frameworks or libraries — pure vanilla web standards.

---

## 🎨 Design System

In strict accordance with `AGENTS.md`:

| Token | Value | Usage |
|---|---|---|
| **Background** | `#FAF8F3` | Warm cream canvas |
| **Main Text** | `#333333` | Dark charcoal for headings and body |
| **Secondary Text** | `#777777` | Muted gray for subtitles and hints |
| **Cards** | `#FFFFFF` | Crisp white cards with subtle shadows |
| **Accent** | `#B9A2CC` | Soft lavender for badges and highlights |

---

## 📂 Project Structure

```text
palette-studio/
├── index.html       # Semantic HTML5 layout and structure
├── styles.css       # Complete design system, layouts, and responsive media queries
├── script.js        # Curated palette dataset, generator math, filtering & localStorage
├── README.md        # Documentation and getting started guide
└── AGENTS.md        # Architectural guidelines and project rules
```

---

## 🚀 How to Preview and Run the Website

Because Palette Studio is built with vanilla HTML, CSS, and JavaScript, it requires **no build step, no npm install, and no API keys**.

You can run and preview the website using any of the methods below:

### Option 1: Using Python (Recommended)
Open your terminal in the `palette-studio` folder and run:

```bash
# Python 3
python3 -m http.server 8000
```
Then open your web browser and navigate to:
[http://localhost:8000](http://localhost:8000)

### Option 2: Using Node.js `npx serve`
If you have Node.js installed:

```bash
npx serve .
```

### Option 3: Direct File Opening
You can simply double-click `index.html` or open it directly in Google Chrome, Safari, Firefox, or Microsoft Edge.

*(Note: For clipboard copying and local storage persistence, running via a local server such as Option 1 is recommended).*

---

## 💡 Keyboard Shortcuts

- <kbd>Spacebar</kbd> — Generate a new 5-color palette in the studio.
- <kbd>Esc</kbd> / Click outside — Close mobile navigation drawer.

---

## 🛠️ Adding New Palettes

To add new palettes, open `script.js` and add an entry to the `CURATED_PALETTES` array following the rule format:

```javascript
{
  id: 'unique-id',
  name: 'Descriptive Name',
  colors: ['#HEX1', '#HEX2', '#HEX3', '#HEX4', '#HEX5'], // Exactly 5 colors
  mood: 'Dreamy', // One of: Dreamy, Cozy, Romantic, Peaceful, Mysterious, Energetic
  style: 'Pastel'  // One of: Pastel, Earthy, Vibrant, Muted, Monochromatic
}
```

---

## 🔮 Future Roadmap (From AGENTS.md)
- Color harmony generator modes (Triadic, Split-Complementary, Tetradic).
- Image color palette extractor (upload an image and sample colors).
- Export palettes as PNG images or CSS / SVG / ASE swatch files.
- Custom manual hex color picker.
