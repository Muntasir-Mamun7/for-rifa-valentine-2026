# 🔔 Notification Reminder System Guide

## Overview

The website now includes an automatic notification reminder system that will alert the user when it's time to unlock a new day. This is perfect for ensuring Rifa doesn't miss any of the special Valentine's Week surprises!

## Features

### 🎯 What Gets Notified

1. **Day Unlock Notifications**: When each day becomes available at midnight Bangladesh Time (BST/UTC+6)
2. **1-Hour Advance Reminders**: A heads-up notification sent 1 hour before each day unlocks
3. **Welcome Notification**: A confirmation message when notifications are first enabled

### 📱 How It Works on iPhone with Chrome

#### For Chrome on iPhone:

1. **First Visit**: When the user opens the main page, they'll see a bell icon (🔔) in the top-right corner
2. **Enable Reminders**: 
   - Tap the bell icon
   - Chrome will ask for notification permission
   - Tap "Allow" to enable reminders
3. **Status Indicators**:
   - "Enable Reminders" = Not yet set up (animated bell)
   - "Reminders On" = Active (green/gold highlight)
   - "Reminders Blocked" = Denied (red highlight)

#### For Safari on iPhone:

Safari on iOS has stricter notification policies. The system will:
1. Request permission when the user taps the bell icon
2. Show helpful instructions if permission is denied
3. Work seamlessly once permission is granted

## 🎨 Visual Design

The notification button:
- **Position**: Fixed in top-right corner
- **Icon**: Animated bell (🔔) that rings when inactive
- **Colors**: 
  - Gold when enabled
  - Red when blocked
  - Neutral when pending
- **Responsive**: Adapts to mobile screens

## ⚙️ Technical Details

### Notification Types

**1. Day Unlock Notification**
```
Title: "Day 1 is now unlocked! 🎉"
Body: "A new special day is waiting for you. Click to view!"
Icon: 💝
```

**2. Advance Reminder (1 hour before)**
```
Title: "Day 1 unlocks in 1 hour! ⏰"
Body: "Get ready! A special surprise is coming soon."
Icon: 🌹
```

**3. On-Page Unlock Detection**
```
Title: "Day 1 is now available! 💖"
Body: "Check out what's waiting for you!"
Icon: ❤️
```

### How Notifications Are Scheduled

1. **On Page Load**: 
   - System calculates time until each day unlocks
   - Sets timers for notifications at unlock time
   - Sets timers for 1-hour advance reminders

2. **Automatic Checks**: 
   - Every minute, checks if any new days have unlocked
   - Prevents duplicate notifications using localStorage

3. **Click Action**: 
   - Clicking a notification brings focus back to the website
   - User can immediately view the newly unlocked content

## 🔒 Privacy & Permissions

### What It Stores
- **localStorage**: Tracks which days have been notified to prevent duplicates
- **No Personal Data**: Only stores notification status flags
- **User Control**: Can be disabled anytime via browser settings

### Permission States
- **Default**: Not yet asked
- **Granted**: Notifications enabled
- **Denied**: User declined (shows helpful re-enable instructions)

## 👨‍💻 Admin Bypass

When logged in as "AmiMuntasir":
- Notification bell is hidden (not needed)
- All days are unlocked immediately
- No notifications are scheduled

## 📋 Notification Schedule (2026)

Assuming notifications are enabled:

| Day | Date | Unlock Time (BST) | Advance Reminder |
|-----|------|-------------------|------------------|
| Day 1 - Rose | Feb 7 | 00:00 | Feb 6, 23:00 |
| Day 2 - Propose | Feb 8 | 00:00 | Feb 7, 23:00 |
| Day 3 - Chocolate | Feb 9 | 00:00 | Feb 8, 23:00 |
| Day 4 - Teddy | Feb 10 | 00:00 | Feb 9, 23:00 |
| Day 5 - Promise | Feb 11 | 00:00 | Feb 10, 23:00 |
| Day 6 - Hug | Feb 12 | 00:00 | Feb 11, 23:00 |
| Day 7 - Kiss | Feb 13 | 00:00 | Feb 12, 23:00 |
| Day 8 - Valentine | Feb 14 | 00:00 | Feb 13, 23:00 |

## 🛠️ Troubleshooting

### Notifications Not Working?

**On Chrome (iPhone/Desktop):**
1. Check if the bell shows "Reminders Blocked"
2. Tap the bell icon for instructions
3. In Chrome settings: Settings → Site Settings → Notifications → Allow for this site

**On Safari (iPhone):**
1. Go to Settings app on iPhone
2. Scroll to Safari
3. Tap "Websites" → "Notifications"
4. Find your website and set to "Allow"

**Alternative Method (iPhone):**
1. Open the website in Safari
2. Tap the "AA" icon in the address bar
3. Tap "Website Settings"
4. Enable "Notifications"

### Browser Doesn't Support Notifications?

Very old browsers may not support the Notification API. The system will:
- Show "Not Supported" status
- Disable the bell button
- Website still works normally, just without notifications

## 🎓 For Developers

### Key Functions

```javascript
requestNotificationPermission()  // Asks for permission
showNotification(title, options) // Displays a notification
scheduleNotifications()          // Sets up all timers
checkForNewUnlocks()            // Checks every minute
updateNotificationButtonStatus() // Updates UI
toggleNotifications()           // Button click handler
```

### Browser Compatibility

- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)
- ✅ Safari (Desktop & iOS 16.4+)
- ✅ Samsung Internet
- ❌ Opera Mini (no support)
- ❌ IE11 (deprecated)

## 💡 Tips

1. **Best Experience**: Enable notifications on first visit
2. **Don't Close Browser**: Keep at least one tab open for timely notifications
3. **Phone Settings**: Ensure Do Not Disturb allows notifications
4. **Test It**: You can login as "TestUser" to see the current countdown
5. **Admin Mode**: Login as "AmiMuntasir" to preview all days immediately

## ❤️ What Users Will Experience

When Rifa enables notifications, she will:
1. Get a welcome notification confirming it's set up
2. Receive reminders 1 hour before each day unlocks
3. Get instant notifications when days become available
4. See a beautiful animated bell icon showing status
5. Never miss a special Valentine's Week surprise!

---

**Made with love for Valentine's Week 2026** 💝
