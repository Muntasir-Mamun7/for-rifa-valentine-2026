# Deployment Guide - Valentine's Week Website 💝

This guide will help you deploy the Valentine's Week website to GitHub Pages and make it live on the internet!

## 🚀 Quick Start (Easiest Method)

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys your site whenever you push to the main branch.

**Steps:**

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub: https://github.com/Muntasir-Mamun7/for-rifa-valentine-2026
   - Click on **Settings** (top menu)
   - Scroll down to **Pages** (left sidebar)
   - Under **Source**, select **GitHub Actions**
   - Click **Save**

2. **Merge Your Changes:**
   - Go to **Pull Requests** tab
   - Find your PR: "Build Valentine's Week interactive website..."
   - Click **Merge pull request**
   - Confirm by clicking **Confirm merge**

3. **Wait for Deployment:**
   - Go to **Actions** tab
   - You'll see the deployment workflow running
   - Wait 1-2 minutes for it to complete (green checkmark ✓)

4. **Access Your Live Site:**
   - Your website will be live at:
   ```
   https://muntasir-mamun7.github.io/for-rifa-valentine-2026/
   ```

That's it! 🎉 Your site is now live!

---

## 📖 Alternative Methods

### Option 2: Manual GitHub Pages Setup (No Actions)

If you prefer not to use GitHub Actions:

1. **Go to Repository Settings:**
   - Navigate to: https://github.com/Muntasir-Mamun7/for-rifa-valentine-2026/settings/pages

2. **Configure Source:**
   - Under **Source**, select **Deploy from a branch**
   - Choose your branch (e.g., `copilot/build-valentines-week-website` or `main`)
   - Select folder: **/ (root)**
   - Click **Save**

3. **Wait for Build:**
   - GitHub will automatically build and deploy
   - Check the green banner at the top for your URL
   - Usually takes 1-3 minutes

4. **Visit Your Site:**
   ```
   https://muntasir-mamun7.github.io/for-rifa-valentine-2026/
   ```

---

## 🔧 Troubleshooting

### Site Not Loading?

1. **Check Build Status:**
   - Go to **Actions** tab
   - Ensure the latest workflow succeeded (green ✓)
   - If failed (red ✗), click on it to see error details

2. **Verify Pages Settings:**
   - Go to Settings → Pages
   - Confirm source is set correctly
   - URL should be displayed at the top

3. **Clear Browser Cache:**
   - Press `Ctrl + Shift + R` (Windows/Linux)
   - Press `Cmd + Shift + R` (Mac)
   - Or try incognito/private mode

4. **Wait a Bit Longer:**
   - Initial deployment can take up to 5 minutes
   - Subsequent deployments are faster (1-2 minutes)

### Getting 404 Error?

- Make sure `index.html` is in the root directory (it is! ✓)
- Wait a few more minutes for DNS propagation
- Check that the branch you selected contains all files

### Want to Use a Custom Domain?

1. **Purchase a Domain:**
   - Buy from providers like Namecheap, GoDaddy, Google Domains

2. **Configure DNS:**
   - Add CNAME record pointing to: `muntasir-mamun7.github.io`
   - Or add A records:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Set in GitHub:**
   - Settings → Pages → Custom domain
   - Enter your domain (e.g., `valentine.example.com`)
   - Check "Enforce HTTPS"

---

## 🎯 Testing Before Going Live

### Test Locally:

```bash
# Navigate to repository
cd /path/to/for-rifa-valentine-2026

# Start a local server (Python 3)
python3 -m http.server 8080

# Or use Node.js
npx http-server -p 8080

# Visit: http://localhost:8080
```

### Test Different Users:

1. **Test as Admin (AmiMuntasir):**
   - Open in browser
   - Enter name: `AmiMuntasir`
   - All 7 days should be unlocked ✨

2. **Test as Regular User (Rifa):**
   - Clear localStorage or use incognito
   - Enter name: `Rifa`
   - Days should show lock icons 🔒
   - Countdown timers should display

---

## 📱 Sharing the Website

Once live, share with:

**Direct Link:**
```
https://muntasir-mamun7.github.io/for-rifa-valentine-2026/
```

**QR Code:**
- Use a QR code generator (e.g., qr-code-generator.com)
- Enter your URL
- Download and share the QR code
- Perfect for printing on cards! 💌

**Social Media:**
- Share the link directly
- Works on all devices (mobile, tablet, desktop)
- No installation needed!

---

## 🔄 Making Updates After Deployment

### To Update Content:

1. **Edit Files Locally:**
   - Modify any HTML/CSS/JS files
   - Test changes locally

2. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Update Valentine's Day message"
   git push origin main
   ```

3. **Automatic Redeployment:**
   - GitHub Actions will automatically redeploy
   - Changes live in 1-2 minutes!

### To Add Music Files:

1. **Add Files:**
   - Place `.mp3` files in `assets/music/`
   - Update HTML `<audio>` tags with correct paths

2. **Commit and Push:**
   ```bash
   git add assets/music/*.mp3
   git commit -m "Add romantic music files"
   git push origin main
   ```

---

## ✅ Pre-Launch Checklist

Before sharing with Rifa, make sure:

- [ ] Site loads correctly at GitHub Pages URL
- [ ] Login page works (can enter name)
- [ ] Time-lock system works (test with "Rifa" and "AmiMuntasir")
- [ ] All 7 day pages are accessible when unlocked
- [ ] Interactive features work (fireworks, petals, polaroid, etc.)
- [ ] Polaroid upload works (test with a sample photo)
- [ ] Site is mobile-friendly (test on phone)
- [ ] Back buttons work on all pages
- [ ] Bengali text displays correctly: আমি তোমায় ভালোবাসি
- [ ] Music placeholders are showing (or music files added)
- [ ] No broken links or missing images

---

## 🎨 Customization Tips

### Change Colors:
- Edit CSS variables in each HTML file
- Search for color codes like `#FF6B9D`, `#C41E3A`

### Add Photos:
- Place images in `assets/images/`
- Reference with: `<img src="../assets/images/your-photo.jpg">`

### Modify Messages:
- Open any `days/dayX-*.html` file
- Find `<p>` tags with messages
- Edit text directly
- Save and push

---

## 🆘 Need Help?

### GitHub Pages Documentation:
https://docs.github.com/en/pages

### Repository Issues:
https://github.com/Muntasir-Mamun7/for-rifa-valentine-2026/issues

### Quick Reference:

| Action | Command/Link |
|--------|--------------|
| Repository | https://github.com/Muntasir-Mamun7/for-rifa-valentine-2026 |
| Settings | https://github.com/Muntasir-Mamun7/for-rifa-valentine-2026/settings/pages |
| Actions | https://github.com/Muntasir-Mamun7/for-rifa-valentine-2026/actions |
| Live Site | https://muntasir-mamun7.github.io/for-rifa-valentine-2026/ |

---

## 💝 Final Notes

This website is:
- ✅ **Ready to deploy** - No build process needed
- ✅ **Mobile-friendly** - Works on all devices
- ✅ **Free hosting** - GitHub Pages is free forever
- ✅ **Automatic HTTPS** - Secure by default
- ✅ **Fast loading** - Optimized for performance

**Your Valentine's Week website is ready to make Rifa's heart flutter!** 🌹💕

Good luck, and happy Valentine's Day! 💝
