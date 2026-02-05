# Valentine's Week Surprise Website for Rifa 💝

A beautiful, romantic Valentine's week interactive website featuring 7 themed days (Feb 7-14, 2026) with special animations, interactive elements, and personalized messages.

## 🚀 **READY TO GO LIVE?**

**👉 [Follow the Quick Start Guide](QUICKSTART.md) to make your website live in 5 minutes!**

Or read the [Complete Deployment Guide](DEPLOYMENT.md) for detailed instructions.

---

## 🌹 Features

### 🔔 Notification Reminder System (NEW!)
- **Automatic reminders** when each day unlocks
- **1-hour advance notifications** before unlock time
- **iOS Safari & Chrome compatible** - perfect for iPhone users
- **Visual status indicator** with animated bell icon
- **Smart scheduling** based on Bangladesh Time (BST/UTC+6)
- **Privacy-focused** - no data collection, browser-only
- **[See How to Enable Notifications](HOW_TO_ENABLE_NOTIFICATIONS.md)**

### Login System
- Simple name-based authentication
- **Admin Mode**: Username "AmiMuntasir" → All days instantly accessible (no time locks)
- **Time-Locked Mode**: Username "Rifa" or others → Days unlock at midnight Bangladesh Time (BST/UTC+6)

### 7 Themed Days

#### Day 1 (Feb 7) - Rose Day 🌹
- Animated blooming rose with particle effects
- Falling rose petals animation
- Interactive map: Gulou Metro → Purple Mountain
- Hidden clickable petals revealing love messages
- Story of first meeting (Nov 30, 2025)

#### Day 2 (Feb 8) - Propose Day 💍
- Animated night sky with twinkling stars
- Purple Mountain silhouette at sunset
- Interactive ring animation
- Fireworks on interaction
- Love declaration messages

#### Day 3 (Feb 9) - Chocolate Day 🍫
- 3D rotating chocolate box
- Interactive unwrapping animation
- 9 chocolate pieces with sweet messages
- Chocolate-themed color palette

#### Day 4 (Feb 10) - Teddy Day 🧸
- Animated waving teddy bear
- Distance map: Nanjing ↔ Bangladesh
- Interactive hug feature
- "Missing you" theme
- Warmth meter animation

#### Day 5 (Feb 11) - Promise Day 🤝
- Animated growing promise tree
- 7 promise branches with commitments
- Nanjing landmarks showcase (NJUPT, NMU, Gulou, Purple Mountain, Xinjiekou, Shangsanjie)
- Parallax scrolling effects
- Virtual promise lock

#### Day 6 (Feb 12) - Hug Day 🤗
- Warmth-themed animations
- Two hearts coming together
- "Send a Hug" interactive button with ripples
- Heartbeat animation
- Temperature display

#### Day 7 (Feb 14) - Valentine's Day ❤️ **GRAND FINALE**
- Epic cinematic opening
- **Interactive Nanjing Map** with 7 special locations
- **Polaroid Photo Upload Feature**:
  - Upload photos with file picker or drag-and-drop
  - Real-time Canvas processing
  - Polaroid frame and vintage filter
  - Shake animation (like real Polaroid)
  - Download transformed photos
  - Gallery view
  - iOS Safari compatible
- Virtual strawberry cake with interactive elements:
  - Click candles to blow them out
  - Cut cake with click/tap
- Timeline of relationship
- Bengali text: "আমি তোমায় ভালোবাসি" (I love you)
- Final love letter
- Music player controls

## 🎨 Technical Details

### Design
- **Color Palette**: Rose pink (#FF6B9D), Deep red (#C41E3A), Soft cream (#FFF5E1), Gold (#FFD700), Purple (#7B68EE), Chocolate brown (#3D2817)
- **Typography**: Playfair Display (headings), Inter (body text)
- **Animations**: 60fps CSS animations, JavaScript interactions
- **Graphics**: Canvas API, particle effects, gradient backgrounds

### Responsive Design
- Mobile-first approach
- Optimized for iPhone 16 and iPad
- Touch-friendly interactions (tap, swipe, drag)
- Works perfectly in iOS Safari
- Portrait and landscape support
- No hover-only interactions

### Performance
- Lightweight pages (each under 5MB)
- Smooth animations without lag
- Lazy loading where appropriate
- Fast rendering on mobile devices

## 📁 File Structure

```
/
├── index.html              # Login page
├── main.html               # Day selector/navigation
├── days/
│   ├── day1-rose.html      # Rose Day
│   ├── day2-propose.html   # Propose Day
│   ├── day3-chocolate.html # Chocolate Day
│   ├── day4-teddy.html     # Teddy Day
│   ├── day5-promise.html   # Promise Day
│   ├── day6-hug.html       # Hug Day
│   └── day7-valentine.html # Valentine's Day (Grand Finale)
├── assets/
│   ├── music/              # Music files (placeholders)
│   └── images/             # Image files (optional)
└── README.md
```

## 🚀 Deployment

### Quick Deployment (5 Minutes!)

**Ready to make your website live?** Follow these simple steps:

1. **📖 Read the Quick Start:** [QUICKSTART.md](QUICKSTART.md)
2. **🔧 Enable GitHub Pages:** Settings → Pages → Source: "GitHub Actions"  
3. **✅ Merge Pull Request:** Merge your code to main branch
4. **🎉 Go Live:** Your site will be at `https://muntasir-mamun7.github.io/for-rifa-valentine-2026/`

**Need detailed instructions?** Check out [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Step-by-step setup guide
- Troubleshooting tips
- Custom domain setup
- How to share your site
- Update and maintenance guide

### Automatic Deployment

This repository includes a GitHub Actions workflow that automatically deploys your site when you push to the main branch. Just merge your PR and the rest happens automatically!

### Local Testing

For testing before deployment:
```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node.js
npx http-server -p 8080

# Visit: http://localhost:8080
```

## 🎵 Adding Music

1. Add your music files to `assets/music/`
2. Update the audio source in each day's HTML file
3. Recommended files:
   - `rose-day.mp3` - Romantic instrumental
   - `enhypen-song.mp3` - ENHYPEN track for Propose Day
   - `romantic-background.mp3` - For Valentine's Day

Look for `<!-- TODO: Add audio element here -->` comments in the HTML files.

## 💕 Personal Details Included

- **First Meeting**: November 30, 2025 at Gulou Metro Station, Nanjing
- **First Date**: Purple Mountain sunset (same day)
- **His Details**: CS student at NJUPT (Nanjing University of Posts and Telecommunications)
- **Her Details**: Medical student at NMU Jiangining Campus (Nanjing Medical University)
- **Current Status**: She's in Bangladesh for winter holidays
- **Shared Memories**: Xinjiekou, Shangsanjie, Zootopia 2 movie, various Nanjing locations
- **Her Favorites**: Chocolate, flowers, strawberry, cake, Korean songs (ENHYPEN), Polaroid pictures

## 🔒 Time Lock System

The website uses Bangladesh Time (BST/UTC+6) to unlock days:
- Feb 7, 2026 00:00 BST → Day 1 unlocks
- Feb 8, 2026 00:00 BST → Day 2 unlocks
- ... and so on until Feb 14

**Admin Bypass**: Login as "AmiMuntasir" to access all days immediately for testing.

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Safari (Desktop & iOS) - Fully tested
- ✅ Firefox
- ✅ Samsung Internet
- ✅ Other modern browsers

## 📱 Mobile Experience

Optimized for:
- iPhone (all models)
- iPad
- Android phones and tablets
- Touch gestures throughout
- Smooth scrolling
- Responsive layouts

## 🛠️ Customization

All pages are self-contained HTML files with inline CSS and JavaScript. To customize:
1. Open any HTML file in a text editor
2. Modify text content, colors, or animations
3. Save and refresh in browser
4. No build process required!

## ❤️ Special Features Checklist

- ✅ Login system with admin bypass
- ✅ Time-lock mechanism (Bangladesh timezone)
- ✅ **Notification reminder system for day unlocks (NEW!)**
- ✅ **Browser notifications with 1-hour advance reminders (NEW!)**
- ✅ 7 unique themed pages
- ✅ Interactive Nanjing map
- ✅ Polaroid photo upload & transformation
- ✅ Music player integration (with placeholders)
- ✅ Mobile responsive (iPhone & iPad optimized)
- ✅ Smooth animations throughout
- ✅ Personal relationship details
- ✅ Bengali language integration
- ✅ Interactive elements on each page
- ✅ Beautiful aesthetic design
- ✅ Back to main menu buttons

## 💝 Made with Love

This website is a labor of love, built to celebrate a beautiful relationship. Every animation, every message, every detail has been carefully crafted to make this Valentine's week unforgettable.

**Happy Valentine's Week! 🌹💍🍫🧸🤝🤗❤️**