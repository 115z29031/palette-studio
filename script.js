/**
 * Palette Studio — script.js
 * Comprehensive palette data, generator logic, filtering, and local storage favorites.
 */

// ==========================================================================
// 1. CURATED PALETTES DATABASE
// Exactly 5 colors per palette, valid HEX codes, descriptive names,
// assigned to appropriate Mood and Color Style.
// ==========================================================================
const CURATED_PALETTES = [
  // --- DREAMY ---
  {
    id: 'dreamy-lavender-haze',
    name: 'Lavender Haze',
    colors: ['#F3E8FF', '#D8B4E2', '#B9A2CC', '#A38EC3', '#6C5B7B'],
    mood: 'Dreamy',
    style: 'Pastel'
  },
  {
    id: 'dreamy-cloud-nine',
    name: 'Cloud Nine',
    colors: ['#E8D7F1', '#D3BCC0', '#A5668B', '#69306D', '#2B193D'],
    mood: 'Dreamy',
    style: 'Muted'
  },
  {
    id: 'dreamy-cotton-candy',
    name: 'Pastel Reverie',
    colors: ['#FFCAD4', '#FFE5D9', '#B8E0D2', '#D6E2E9', '#F4ACB7'],
    mood: 'Dreamy',
    style: 'Pastel'
  },
  {
    id: 'dreamy-starlit-sky',
    name: 'Starlit Violet',
    colors: ['#F8F3FC', '#E2D4F0', '#C5ACDF', '#8A62B6', '#3E2468'],
    mood: 'Dreamy',
    style: 'Monochromatic'
  },
  {
    id: 'dreamy-aurora-glow',
    name: 'Aurora Dreams',
    colors: ['#48CAE4', '#90E0EF', '#ADE8F4', '#CAF0F8', '#E2AFF7'],
    mood: 'Dreamy',
    style: 'Pastel'
  },
  {
    id: 'dreamy-cosmic-glow',
    name: 'Cosmic Twilight',
    colors: ['#7400B8', '#6930C3', '#5390D9', '#4EA8DE', '#48BFE3'],
    mood: 'Dreamy',
    style: 'Vibrant'
  },

  // --- COZY ---
  {
    id: 'cozy-autumn-knit',
    name: 'Autumn Knits',
    colors: ['#FEFAE0', '#DDA15E', '#BC6C25', '#606C38', '#283618'],
    mood: 'Cozy',
    style: 'Earthy'
  },
  {
    id: 'cozy-fireside-hearth',
    name: 'Fireside Hearth',
    colors: ['#FFE6A7', '#BB9457', '#99582A', '#6F1D1B', '#43281C'],
    mood: 'Cozy',
    style: 'Earthy'
  },
  {
    id: 'cozy-morning-chai',
    name: 'Morning Chai',
    colors: ['#F7EDE2', '#DDB892', '#B08968', '#7F5539', '#3E2723'],
    mood: 'Cozy',
    style: 'Monochromatic'
  },
  {
    id: 'cozy-rustic-clay',
    name: 'Warm Terracotta',
    colors: ['#FFE8D6', '#DDBEA9', '#CB997E', '#B7B7A4', '#A5A58D'],
    mood: 'Cozy',
    style: 'Earthy'
  },
  {
    id: 'cozy-wool-blanket',
    name: 'Wool & Amber',
    colors: ['#FAEDCD', '#E9EDC9', '#CCD5AE', '#D4A373', '#6D6875'],
    mood: 'Cozy',
    style: 'Muted'
  },
  {
    id: 'cozy-spiced-cider',
    name: 'Spiced Cider',
    colors: ['#FFB703', '#FB8500', '#D84638', '#9B2226', '#540B0E'],
    mood: 'Cozy',
    style: 'Vibrant'
  },

  // --- ROMANTIC ---
  {
    id: 'romantic-vintage-peony',
    name: 'Vintage Peony',
    colors: ['#FFF0F3', '#FFCCD5', '#FFB3C1', '#FF758F', '#C9184A'],
    mood: 'Romantic',
    style: 'Monochromatic'
  },
  {
    id: 'romantic-parisian-sunset',
    name: 'Parisian Sunset',
    colors: ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D'],
    mood: 'Romantic',
    style: 'Pastel'
  },
  {
    id: 'romantic-dusty-romance',
    name: 'Dusty Velvet',
    colors: ['#E0B1CB', '#BE95C4', '#9F86C0', '#5E548E', '#231942'],
    mood: 'Romantic',
    style: 'Muted'
  },
  {
    id: 'romantic-champagne-roses',
    name: 'Champagne & Roses',
    colors: ['#FCEADE', '#FFCAD4', '#F4ACB7', '#9D8189', '#574249'],
    mood: 'Romantic',
    style: 'Pastel'
  },
  {
    id: 'romantic-crimson-desire',
    name: 'Crimson Velvet',
    colors: ['#FF758F', '#FF4D6D', '#C9184A', '#A4133C', '#590D22'],
    mood: 'Romantic',
    style: 'Monochromatic'
  },
  {
    id: 'romantic-rose-passion',
    name: 'Passionate Rose',
    colors: ['#FF0A54', '#FF477E', '#FF70A6', '#FF99C8', '#4A0E2E'],
    mood: 'Romantic',
    style: 'Vibrant'
  },

  // --- PEACEFUL ---
  {
    id: 'peaceful-misty-forest',
    name: 'Misty Pine Forest',
    colors: ['#D8F3DC', '#B7E4C7', '#74C69D', '#40916C', '#1B4332'],
    mood: 'Peaceful',
    style: 'Earthy'
  },
  {
    id: 'peaceful-quiet-sage',
    name: 'Quiet Sage',
    colors: ['#E8ECE9', '#CAD2C5', '#84A98C', '#52796F', '#2F3E46'],
    mood: 'Peaceful',
    style: 'Monochromatic'
  },
  {
    id: 'peaceful-morning-tide',
    name: 'Morning Tide',
    colors: ['#E0FAFF', '#BEE1E6', '#DFE7FD', '#CDDAFD', '#7A9E9F'],
    mood: 'Peaceful',
    style: 'Pastel'
  },
  {
    id: 'peaceful-nordic-fog',
    name: 'Nordic Morning',
    colors: ['#E9ECEF', '#CED4DA', '#ADB5BD', '#6C757D', '#495057'],
    mood: 'Peaceful',
    style: 'Muted'
  },
  {
    id: 'peaceful-botanical-zen',
    name: 'Botanical Zen',
    colors: ['#E0ECE4', '#A8BBA2', '#7E9181', '#5B6E60', '#3B493F'],
    mood: 'Peaceful',
    style: 'Muted'
  },
  {
    id: 'peaceful-lagoon-breeze',
    name: 'Lagoon Breeze',
    colors: ['#ADE8F4', '#48CAE4', '#00B4D8', '#0096C7', '#0077B6'],
    mood: 'Peaceful',
    style: 'Vibrant'
  },

  // --- MYSTERIOUS ---
  {
    id: 'mysterious-midnight-indigo',
    name: 'Midnight Indigo',
    colors: ['#E0E1DD', '#778DA9', '#415A77', '#1B263B', '#0D1B2A'],
    mood: 'Mysterious',
    style: 'Monochromatic'
  },
  {
    id: 'mysterious-twilight-crypt',
    name: 'Shadow Plum',
    colors: ['#EACDC2', '#B75D69', '#774C60', '#372549', '#1A1423'],
    mood: 'Mysterious',
    style: 'Muted'
  },
  {
    id: 'mysterious-shadow-orchid',
    name: 'Shadow Orchid',
    colors: ['#C77DFF', '#7B2CBF', '#3C096C', '#240046', '#10002B'],
    mood: 'Mysterious',
    style: 'Monochromatic'
  },
  {
    id: 'mysterious-cyber-noir',
    name: 'Neon Twilight',
    colors: ['#0F0F1B', '#241E38', '#5E2B7A', '#A33388', '#FF4D6D'],
    mood: 'Mysterious',
    style: 'Vibrant'
  },
  {
    id: 'mysterious-abyssal-depth',
    name: 'Abyssal Depth',
    colors: ['#E9D8A6', '#94D2BD', '#0A9396', '#005F73', '#001219'],
    mood: 'Mysterious',
    style: 'Earthy'
  },
  {
    id: 'mysterious-foggy-moor',
    name: 'Ancient Moor',
    colors: ['#D1DCC6', '#95A384', '#4A5240', '#32373B', '#1F2421'],
    mood: 'Mysterious',
    style: 'Muted'
  },

  // --- ENERGETIC ---
  {
    id: 'energetic-citrus-punch',
    name: 'Citrus Punch',
    colors: ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93'],
    mood: 'Energetic',
    style: 'Vibrant'
  },
  {
    id: 'energetic-electric-carnival',
    name: 'Electric Carnival',
    colors: ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0'],
    mood: 'Energetic',
    style: 'Vibrant'
  },
  {
    id: 'energetic-solar-flare',
    name: 'Solar Flare',
    colors: ['#FFF3B0', '#FAA307', '#E85D04', '#DC2F02', '#9D0208'],
    mood: 'Energetic',
    style: 'Monochromatic'
  },
  {
    id: 'energetic-mediterranean-sun',
    name: 'Mediterranean Sun',
    colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
    mood: 'Energetic',
    style: 'Earthy'
  },
  {
    id: 'energetic-pastel-pop',
    name: 'Pastel Pop',
    colors: ['#B5EAD7', '#E2F0CB', '#FFDAC1', '#FFB7B2', '#FF9AA2'],
    mood: 'Energetic',
    style: 'Pastel'
  },
  {
    id: 'energetic-spiced-ochre',
    name: 'Warm Terrazzo',
    colors: ['#FF9B54', '#FF7F51', '#CE4257', '#720026', '#4F000B'],
    mood: 'Energetic',
    style: 'Muted'
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
const STORAGE_KEY = 'palette_studio_favorites';

// Favorites array loaded from localStorage
let favorites = loadFavoritesFromStorage();

// Current Generator state: 5 colors + lock states
let generatorState = {
  name: 'Spring Sunrise',
  colors: ['#FAF0CA', '#F4D35E', '#EE964B', '#F95738', '#0D3B66'],
  locked: [false, false, false, false, false],
  mood: 'Energetic',
  style: 'Vibrant'
};

// Filter states for Explore section
let currentMoodFilter = 'all';
let currentStyleFilter = 'all';

// Featured Palette index
let currentFeaturedIndex = 0;

// Load favorites from browser local storage
function loadFavoritesFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Error loading favorites from localStorage', e);
    return [];
  }
}

// Save favorites to browser local storage
function saveFavoritesToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error('Error saving favorites to localStorage', e);
  }
}

// Check if a palette is favorited by ID or matching colors
function isPaletteFavorited(palette) {
  if (!palette) return false;
  return favorites.some(fav => {
    if (fav.id && palette.id && fav.id === palette.id) return true;
    if (Array.isArray(fav.colors) && Array.isArray(palette.colors)) {
      return fav.colors.every((c, i) => c.toUpperCase() === (palette.colors[i] || '').toUpperCase());
    }
    return false;
  });
}

// Toggle palette in favorites
function toggleFavorite(palette) {
  const index = favorites.findIndex(fav => {
    if (fav.id && palette.id && fav.id === palette.id) return true;
    if (Array.isArray(fav.colors) && Array.isArray(palette.colors)) {
      return fav.colors.every((c, i) => c.toUpperCase() === (palette.colors[i] || '').toUpperCase());
    }
    return false;
  });

  let added = false;
  if (index >= 0) {
    favorites.splice(index, 1);
    showToast(`Removed "${palette.name || 'Palette'}" from favorites`);
  } else {
    const paletteToSave = {
      id: palette.id || 'custom-' + Date.now(),
      name: palette.name || 'Custom Palette',
      colors: [...palette.colors],
      mood: palette.mood || 'Artistic',
      style: palette.style || 'Harmonious',
      savedAt: Date.now()
    };
    favorites.unshift(paletteToSave);
    showToast(`Saved "${paletteToSave.name}" to favorites!`);
    added = true;
  }

  saveFavoritesToStorage();
  updateFavoritesUI();
  updateExploreCardFavoriteStates();
  updateGeneratorFavoriteBtn();
  updateFeaturedFavoriteBtn();

  return added;
}

// ==========================================================================
// 3. COLOR MATH & PROCEDURAL HARMONIES
// Generates valid, beautiful 5-color combinations when generating random palettes.
// ==========================================================================

// Convert HSL to HEX
function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

// Convert HEX to HSL
function hexToHsl(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// Generate creative palette names
const PALETTE_NAME_PREFIXES = [
  'Misty', 'Velvet', 'Golden', 'Celestial', 'Silent', 'Warm', 'Hidden', 'Sunlit',
  'Nordic', 'Vintage', 'Soft', 'Botanical', 'Cosmic', 'Amber', 'Silver', 'Dusk',
  'Morning', 'Earthy', 'Radiant', 'Pastel', 'Oceanic', 'Moonlit', 'Crimson', 'Serene'
];

const PALETTE_NAME_SUFFIXES = [
  'Whisper', 'Meadow', 'Horizon', 'Breeze', 'Hearth', 'Sanctuary', 'Echo', 'Tide',
  'Solitude', 'Flora', 'Canopy', 'Glow', 'Twilight', 'Lagoon', 'Oasis', 'Blossom',
  'Dawn', 'Harmony', 'Studio', 'Canvas', 'Velvet', 'Atmosphere'
];

function generateCreativeName() {
  const p = PALETTE_NAME_PREFIXES[Math.floor(Math.random() * PALETTE_NAME_PREFIXES)] || 'Studio';
  const s = PALETTE_NAME_SUFFIXES[Math.floor(Math.random() * PALETTE_NAME_SUFFIXES)] || 'Harmony';
  return `${p} ${s}`;
}

// Procedural harmonic 5-color palette generator
function generateProceduralPalette(referenceHex = null) {
  let baseHue = referenceHex ? hexToHsl(referenceHex).h : Math.floor(Math.random() * 360);
  const harmonyTypes = ['analogous', 'complementary', 'pastel', 'earthy', 'monochromatic', 'vibrant'];
  const type = harmonyTypes[Math.floor(Math.random() * harmonyTypes.length)];

  const colors = [];

  switch (type) {
    case 'pastel':
      for (let i = 0; i < 5; i++) {
        const h = (baseHue + i * 35) % 360;
        const s = 45 + Math.floor(Math.random() * 25);
        const l = 78 + Math.floor(Math.random() * 12);
        colors.push(hslToHex(h, s, l));
      }
      break;

    case 'earthy':
      for (let i = 0; i < 5; i++) {
        const h = (baseHue + (i - 2) * 20) % 360;
        const s = 25 + Math.floor(Math.random() * 30);
        const l = 25 + i * 14;
        colors.push(hslToHex(h, s, l));
      }
      break;

    case 'monochromatic':
      for (let i = 0; i < 5; i++) {
        const s = 40 + Math.floor(Math.random() * 30);
        const l = 18 + i * 18;
        colors.push(hslToHex(baseHue, s, l));
      }
      break;

    case 'complementary':
      const compHue = (baseHue + 180) % 360;
      colors.push(hslToHex(baseHue, 60, 30));
      colors.push(hslToHex(baseHue, 50, 65));
      colors.push(hslToHex(baseHue, 30, 88));
      colors.push(hslToHex(compHue, 55, 60));
      colors.push(hslToHex(compHue, 70, 35));
      break;

    case 'vibrant':
      for (let i = 0; i < 5; i++) {
        const h = (baseHue + i * 72) % 360;
        const s = 75 + Math.floor(Math.random() * 20);
        const l = 48 + Math.floor(Math.random() * 16);
        colors.push(hslToHex(h, s, l));
      }
      break;

    case 'analogous':
    default:
      for (let i = 0; i < 5; i++) {
        const h = (baseHue + (i - 2) * 25) % 360;
        const s = 45 + Math.floor(Math.random() * 35);
        const l = 35 + i * 11;
        colors.push(hslToHex(h, s, l));
      }
      break;
  }

  return {
    name: generateCreativeName(),
    colors
  };
}

// ==========================================================================
// 4. CLIPBOARD COPY UTILITIES
// Copy single HEX or all 5 HEX codes with fallback and toast notification
// ==========================================================================
function copyToClipboard(text, customMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customMessage || `Copied ${text} to clipboard!`);
    }).catch(() => {
      fallbackCopy(text, customMessage);
    });
  } else {
    fallbackCopy(text, customMessage);
  }
}

function fallbackCopy(text, customMessage) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(customMessage || `Copied ${text} to clipboard!`);
  } catch (err) {
    showToast('Copied: ' + text);
  }
  document.body.removeChild(textarea);
}

let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// ==========================================================================
// 5. FEATURED PALETTE LOGIC
// ==========================================================================
function renderFeaturedPalette(palette) {
  const titleEl = document.getElementById('featuredTitle');
  const moodEl = document.getElementById('featuredMood');
  const styleEl = document.getElementById('featuredStyle');
  const swatchesEl = document.getElementById('featuredSwatches');

  if (!titleEl || !swatchesEl) return;

  titleEl.textContent = palette.name;
  if (moodEl) moodEl.textContent = palette.mood;
  if (styleEl) styleEl.textContent = palette.style;

  swatchesEl.innerHTML = '';
  palette.colors.forEach(hex => {
    const swatch = document.createElement('div');
    swatch.className = 'featured-swatch-item';
    swatch.style.backgroundColor = hex;
    swatch.setAttribute('title', `Click to copy ${hex}`);
    swatch.setAttribute('role', 'button');
    swatch.setAttribute('tabindex', '0');

    swatch.innerHTML = `<span class="featured-swatch-code">${hex}</span>`;

    swatch.addEventListener('click', () => {
      copyToClipboard(hex, `Copied ${hex} to clipboard!`);
    });

    swatch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyToClipboard(hex, `Copied ${hex} to clipboard!`);
      }
    });

    swatchesEl.appendChild(swatch);
  });

  updateFeaturedFavoriteBtn();
}

function updateFeaturedFavoriteBtn() {
  const favBtn = document.getElementById('featuredFavBtn');
  if (!favBtn) return;
  const currentPalette = CURATED_PALETTES[currentFeaturedIndex];
  const isFav = isPaletteFavorited(currentPalette);

  if (isFav) {
    favBtn.classList.add('active');
    favBtn.setAttribute('title', 'Remove from Favorites');
  } else {
    favBtn.classList.remove('active');
    favBtn.setAttribute('title', 'Save to Favorites');
  }
}

function nextFeaturedPalette() {
  currentFeaturedIndex = (currentFeaturedIndex + 1) % CURATED_PALETTES.length;
  renderFeaturedPalette(CURATED_PALETTES[currentFeaturedIndex]);
}

// ==========================================================================
// 6. RANDOM PALETTE GENERATOR LOGIC
// Five color columns, lock/unlock toggle, click-to-copy hex, Spacebar trigger
// ==========================================================================
function renderGenerator() {
  const container = document.getElementById('generatorSwatches');
  const nameEl = document.getElementById('generatorPaletteName');

  if (!container) return;

  if (nameEl) {
    nameEl.textContent = generatorState.name;
  }

  container.innerHTML = '';

  generatorState.colors.forEach((hex, index) => {
    const isLocked = generatorState.locked[index];

    const swatchEl = document.createElement('div');
    swatchEl.className = 'generator-swatch';
    swatchEl.style.backgroundColor = hex;
    swatchEl.setAttribute('role', 'region');
    swatchEl.setAttribute('aria-label', `Color ${index + 1}: ${hex}`);

    // Lock button
    const lockBtn = document.createElement('button');
    lockBtn.className = `swatch-lock-btn ${isLocked ? 'locked' : ''}`;
    lockBtn.setAttribute('aria-label', isLocked ? `Unlock color ${hex}` : `Lock color ${hex}`);
    lockBtn.setAttribute('title', isLocked ? 'Locked (will not change)' : 'Click to lock');
    lockBtn.innerHTML = isLocked
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`;

    lockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      generatorState.locked[index] = !generatorState.locked[index];
      renderGenerator();
      showToast(generatorState.locked[index] ? `Color ${hex} locked` : `Color ${hex} unlocked`);
    });

    // Center Copy Hint
    const copyHint = document.createElement('div');
    copyHint.className = 'swatch-copy-hint';
    copyHint.textContent = 'Click to Copy';

    // Bottom Meta
    const bottomMeta = document.createElement('div');
    bottomMeta.className = 'swatch-bottom-meta';
    bottomMeta.innerHTML = `
      <span class="swatch-hex-code">${hex}</span>
      <span class="swatch-color-name">Color ${index + 1}</span>
    `;

    // Click anywhere on swatch to copy
    swatchEl.addEventListener('click', () => {
      copyToClipboard(hex, `Copied ${hex} to clipboard!`);
    });

    swatchEl.appendChild(lockBtn);
    swatchEl.appendChild(copyHint);
    swatchEl.appendChild(bottomMeta);

    container.appendChild(swatchEl);
  });

  updateGeneratorFavoriteBtn();
}

function generateNewPalette() {
  const hasLocked = generatorState.locked.some(l => l);

  // If some are locked, pick reference color from the first locked swatch
  let referenceHex = null;
  if (hasLocked) {
    const firstLockedIdx = generatorState.locked.findIndex(l => l);
    referenceHex = generatorState.colors[firstLockedIdx];
  }

  // Generate either procedural harmony or pick from curated palettes
  let newColors = [];
  let newName = generatorState.name;

  if (!hasLocked && Math.random() > 0.4) {
    // Pick random curated palette
    const randomCurated = CURATED_PALETTES[Math.floor(Math.random() * CURATED_PALETTES.length)];
    newColors = [...randomCurated.colors];
    newName = randomCurated.name;
    generatorState.mood = randomCurated.mood;
    generatorState.style = randomCurated.style;
  } else {
    // Generate fresh procedural harmony
    const generated = generateProceduralPalette(referenceHex);
    newColors = generated.colors;
    newName = generated.name;
  }

  // Update unlocked slots
  generatorState.colors = generatorState.colors.map((currentColor, i) => {
    if (generatorState.locked[i]) {
      return currentColor;
    }
    return newColors[i] || currentColor;
  });

  if (!hasLocked) {
    generatorState.name = newName;
  }

  renderGenerator();
}

function updateGeneratorFavoriteBtn() {
  const favBtn = document.getElementById('generatorFavBtn');
  const favBtnText = document.getElementById('generatorFavBtnText');
  if (!favBtn) return;

  const currentObj = {
    name: generatorState.name,
    colors: generatorState.colors,
    mood: generatorState.mood || 'Artistic',
    style: generatorState.style || 'Studio'
  };

  const isFav = isPaletteFavorited(currentObj);
  if (isFav) {
    favBtn.classList.add('active');
    if (favBtnText) favBtnText.textContent = 'Favorited';
  } else {
    favBtn.classList.remove('active');
    if (favBtnText) favBtnText.textContent = 'Save to Favorites';
  }
}

// Load a palette into the generator
function loadIntoGenerator(palette) {
  if (!palette || !Array.isArray(palette.colors) || palette.colors.length !== 5) return;
  generatorState.name = palette.name;
  generatorState.colors = [...palette.colors];
  generatorState.locked = [false, false, false, false, false];
  generatorState.mood = palette.mood;
  generatorState.style = palette.style;

  renderGenerator();

  const generatorSection = document.getElementById('generator');
  if (generatorSection) {
    generatorSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Loaded "${palette.name}" into Generator`);
}

// ==========================================================================
// 7. EXPLORE (MOODS & STYLES) FILTERING & RENDERING
// ==========================================================================
function renderExplorePalettes() {
  const grid = document.getElementById('palettesGrid');
  const countEl = document.getElementById('resultsCount');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (!grid) return;

  // Filter palettes based on active mood & style
  const filtered = CURATED_PALETTES.filter(palette => {
    const matchesMood = (currentMoodFilter === 'all') || (palette.mood === currentMoodFilter);
    const matchesStyle = (currentStyleFilter === 'all') || (palette.style === currentStyleFilter);
    return matchesMood && matchesStyle;
  });

  // Update counter
  if (countEl) {
    if (currentMoodFilter === 'all' && currentStyleFilter === 'all') {
      countEl.textContent = `Showing all ${filtered.length} palettes`;
      if (resetBtn) resetBtn.style.display = 'none';
    } else {
      const moodText = currentMoodFilter !== 'all' ? `Mood: ${currentMoodFilter}` : '';
      const styleText = currentStyleFilter !== 'all' ? `Style: ${currentStyleFilter}` : '';
      const filterLabel = [moodText, styleText].filter(Boolean).join(' • ');
      countEl.textContent = `Showing ${filtered.length} palettes (${filterLabel})`;
      if (resetBtn) resetBtn.style.display = 'inline-flex';
    }
  }

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 0.5rem;">No palettes found</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">No palettes currently match this specific combination of mood and style.</p>
        <button class="btn btn-secondary" onclick="resetAllFilters()">View All Palettes</button>
      </div>
    `;
    return;
  }

  filtered.forEach(palette => {
    const card = createPaletteCard(palette, false);
    grid.appendChild(card);
  });
}

// Reusable card creation helper
function createPaletteCard(palette, isFavoriteSection = false) {
  const card = document.createElement('div');
  card.className = 'palette-card';
  card.dataset.id = palette.id || '';

  const isFav = isPaletteFavorited(palette);

  // Card Header
  const header = document.createElement('div');
  header.className = 'palette-card-header';
  header.innerHTML = `
    <div>
      <h3 class="palette-card-title">${palette.name}</h3>
      <div class="palette-card-badges">
        ${palette.mood ? `<span class="pill pill-mood">${palette.mood}</span>` : ''}
        ${palette.style ? `<span class="pill pill-style">${palette.style}</span>` : ''}
      </div>
    </div>
  `;

  // Favorite Heart Button
  const favBtn = document.createElement('button');
  favBtn.className = `card-fav-btn ${isFav ? 'active' : ''}`;
  favBtn.setAttribute('aria-label', isFav ? `Remove ${palette.name} from favorites` : `Save ${palette.name} to favorites`);
  favBtn.setAttribute('title', isFav ? 'Remove from favorites' : 'Save to favorites');
  favBtn.innerHTML = `
    <svg class="heart-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  `;

  favBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(palette);
  });

  header.appendChild(favBtn);
  card.appendChild(header);

  // Swatches row (5 colors)
  const swatchesRow = document.createElement('div');
  swatchesRow.className = 'palette-card-swatches';

  // Hex codes list row
  const hexListRow = document.createElement('div');
  hexListRow.className = 'palette-hex-list';

  palette.colors.forEach((hex) => {
    // Swatch box
    const swatch = document.createElement('div');
    swatch.className = 'palette-card-swatch';
    swatch.style.backgroundColor = hex;
    swatch.setAttribute('title', `Click to copy ${hex}`);
    swatch.addEventListener('click', () => {
      copyToClipboard(hex, `Copied ${hex} to clipboard!`);
    });
    swatchesRow.appendChild(swatch);

    // Clickable hex button
    const hexBtn = document.createElement('button');
    hexBtn.className = 'hex-btn';
    hexBtn.textContent = hex;
    hexBtn.setAttribute('title', `Copy ${hex}`);
    hexBtn.addEventListener('click', () => {
      copyToClipboard(hex, `Copied ${hex} to clipboard!`);
    });
    hexListRow.appendChild(hexBtn);
  });

  card.appendChild(swatchesRow);
  card.appendChild(hexListRow);

  // Card Footer
  const footer = document.createElement('div');
  footer.className = 'palette-card-footer';

  const copyAllBtn = document.createElement('button');
  copyAllBtn.className = 'btn-text';
  copyAllBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    Copy All
  `;
  copyAllBtn.addEventListener('click', () => {
    const allHex = palette.colors.join(', ');
    copyToClipboard(allHex, `Copied all 5 colors of "${palette.name}"!`);
  });

  const openGenBtn = document.createElement('button');
  openGenBtn.className = 'btn-open-generator';
  openGenBtn.innerHTML = `
    Open in Studio
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  `;
  openGenBtn.addEventListener('click', () => {
    loadIntoGenerator(palette);
  });

  footer.appendChild(copyAllBtn);
  footer.appendChild(openGenBtn);
  card.appendChild(footer);

  return card;
}

function updateExploreCardFavoriteStates() {
  const cards = document.querySelectorAll('#palettesGrid .palette-card');
  cards.forEach(card => {
    const id = card.dataset.id;
    const palette = CURATED_PALETTES.find(p => p.id === id);
    if (palette) {
      const favBtn = card.querySelector('.card-fav-btn');
      if (favBtn) {
        if (isPaletteFavorited(palette)) {
          favBtn.classList.add('active');
        } else {
          favBtn.classList.remove('active');
        }
      }
    }
  });
}

function setupFilterListeners() {
  const moodPills = document.querySelectorAll('#moodFilters .filter-pill');
  moodPills.forEach(pill => {
    pill.addEventListener('click', () => {
      moodPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentMoodFilter = pill.dataset.value;
      renderExplorePalettes();
    });
  });

  const stylePills = document.querySelectorAll('#styleFilters .filter-pill');
  stylePills.forEach(pill => {
    pill.addEventListener('click', () => {
      stylePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentStyleFilter = pill.dataset.value;
      renderExplorePalettes();
    });
  });

  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }
}

function resetAllFilters() {
  currentMoodFilter = 'all';
  currentStyleFilter = 'all';

  document.querySelectorAll('#moodFilters .filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.value === 'all');
  });

  document.querySelectorAll('#styleFilters .filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.value === 'all');
  });

  renderExplorePalettes();
}

// Global hook for footer links to filter Explore section directly
window.filterByFooter = function(type, value) {
  if (type === 'mood') {
    currentMoodFilter = value;
    document.querySelectorAll('#moodFilters .filter-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.value === value);
    });
  } else if (type === 'style') {
    currentStyleFilter = value;
    document.querySelectorAll('#styleFilters .filter-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.value === value);
    });
  }
  renderExplorePalettes();
};

// ==========================================================================
// 8. FAVORITES SECTION LOGIC
// Display saved palettes from localStorage, allow removal and clearing
// ==========================================================================
function updateFavoritesUI() {
  const grid = document.getElementById('favoritesGrid');
  const emptyState = document.getElementById('favoritesEmptyState');
  const toolbar = document.getElementById('favoritesToolbar');
  const statText = document.getElementById('favoritesStatText');
  const countBadge = document.getElementById('fav-count-badge');
  const mobileCountBadge = document.getElementById('mobile-fav-count');

  const count = favorites.length;

  // Update navigation count badges
  if (countBadge) countBadge.textContent = count;
  if (mobileCountBadge) mobileCountBadge.textContent = count;

  if (!grid || !emptyState) return;

  if (count === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    if (toolbar) toolbar.style.display = 'none';
  } else {
    emptyState.style.display = 'none';
    if (toolbar) {
      toolbar.style.display = 'flex';
      if (statText) {
        statText.textContent = `You have saved ${count} favorite palette${count > 1 ? 's' : ''}`;
      }
    }

    grid.innerHTML = '';
    favorites.forEach(favPalette => {
      const card = createPaletteCard(favPalette, true);
      grid.appendChild(card);
    });
  }
}

function clearAllFavorites() {
  if (favorites.length === 0) return;
  const confirmed = window.confirm('Are you sure you want to remove all saved favorite palettes?');
  if (confirmed) {
    favorites = [];
    saveFavoritesToStorage();
    updateFavoritesUI();
    updateExploreCardFavoriteStates();
    updateGeneratorFavoriteBtn();
    updateFeaturedFavoriteBtn();
    showToast('All favorite palettes cleared');
  }
}

// ==========================================================================
// 9. NAVIGATION, KEYBOARD SHORTCUTS & EVENT SETUP
// ==========================================================================
function setupNavigation() {
  // Mobile hamburger menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNavPanel');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when link clicked
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

function setupEventListeners() {
  // Generate button in generator
  const genBtn = document.getElementById('generateNewBtn');
  if (genBtn) {
    genBtn.addEventListener('click', generateNewPalette);
  }

  // Generator favorite toggle button
  const genFavBtn = document.getElementById('generatorFavBtn');
  if (genFavBtn) {
    genFavBtn.addEventListener('click', () => {
      const currentObj = {
        name: generatorState.name,
        colors: generatorState.colors,
        mood: generatorState.mood || 'Artistic',
        style: generatorState.style || 'Studio'
      };
      toggleFavorite(currentObj);
    });
  }

  // Generator Copy All HEX button
  const genCopyAllBtn = document.getElementById('generatorCopyAllBtn');
  if (genCopyAllBtn) {
    genCopyAllBtn.addEventListener('click', () => {
      const allHex = generatorState.colors.join(', ');
      copyToClipboard(allHex, `Copied all 5 colors of "${generatorState.name}"!`);
    });
  }

  // Featured palette controls
  const featFavBtn = document.getElementById('featuredFavBtn');
  if (featFavBtn) {
    featFavBtn.addEventListener('click', () => {
      const current = CURATED_PALETTES[currentFeaturedIndex];
      toggleFavorite(current);
    });
  }

  const featNextBtn = document.getElementById('featuredNextBtn');
  if (featNextBtn) {
    featNextBtn.addEventListener('click', nextFeaturedPalette);
  }

  const featCopyAllBtn = document.getElementById('featuredCopyAllBtn');
  if (featCopyAllBtn) {
    featCopyAllBtn.addEventListener('click', () => {
      const current = CURATED_PALETTES[currentFeaturedIndex];
      const allHex = current.colors.join(', ');
      copyToClipboard(allHex, `Copied all 5 colors of "${current.name}"!`);
    });
  }

  // Clear all favorites
  const clearFavsBtn = document.getElementById('clearAllFavoritesBtn');
  if (clearFavsBtn) {
    clearFavsBtn.addEventListener('click', clearAllFavorites);
  }

  // Spacebar shortcut to generate
  window.addEventListener('keydown', (e) => {
    // Only trigger if Space is pressed without modifying keys and not typing in inputs
    if (e.code === 'Space' || e.key === ' ') {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag !== 'input' && activeTag !== 'textarea' && activeTag !== 'button') {
        e.preventDefault();
        generateNewPalette();
      }
    }
  });
}

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedPalette(CURATED_PALETTES[0]);
  renderGenerator();
  renderExplorePalettes();
  setupFilterListeners();
  updateFavoritesUI();
  setupNavigation();
  setupEventListeners();
});
