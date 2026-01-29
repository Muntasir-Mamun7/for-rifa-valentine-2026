# Valentine's Day Background Music - Song List

This document contains recommended songs for each Valentine's Day page. Download these songs and place them in the `assets/music/` directory.

## How to Add Music

1. Download the songs you want to use (MP3 format recommended)
2. Place them in the `assets/music/` directory
3. Update the HTML files to reference the correct file paths
4. The music will auto-play in the background when users interact with the page

## Recommended Songs by Day

### Day 1 - Rose Day (February 7)
**File:** `assets/music/rose-day.mp3`

**Suggested Songs:**
- "Perfect" by Ed Sheeran
- "Make You Feel My Love" by Adele
- "A Thousand Years" by Christina Perri
- "All of Me" by John Legend
- "Thinking Out Loud" by Ed Sheeran

### Day 2 - Propose Day (February 8)
**File:** `assets/music/propose-day.mp3`

**Suggested Songs:**
- "Marry Me" by Train
- "Marry You" by Bruno Mars
- "Love Story" by Taylor Swift
- "Can't Help Falling in Love" by Elvis Presley
- "At Last" by Etta James

### Day 3 - Chocolate Day (February 9)
**File:** `assets/music/chocolate-day.mp3`

**Suggested Songs:**
- "Sugar" by Maroon 5
- "Sweet Disposition" by The Temper Trap
- "How Sweet It Is" by James Taylor
- "Brown Eyed Girl" by Van Morrison
- "Sunday Morning" by Maroon 5

### Day 4 - Teddy Day (February 10)
**File:** `assets/music/teddy-day.mp3`

**Suggested Songs:**
- "You Are My Sunshine" by Johnny Cash
- "Somewhere Over the Rainbow" by Israel Kamakawiwo'ole
- "Can't Take My Eyes Off You" by Frankie Valli
- "Here Comes the Sun" by The Beatles
- "What a Wonderful World" by Louis Armstrong

### Day 5 - Promise Day (February 11)
**File:** `assets/music/promise-day.mp3`

**Suggested Songs:**
- "I Promise" by Radiohead
- "The Promise" by Tracy Chapman
- "Eternal Flame" by The Bangles
- "I'll Be There" by The Jackson 5
- "Stand by Me" by Ben E. King

### Day 6 - Hug Day (February 12)
**File:** `assets/music/hug-day.mp3`

**Suggested Songs:**
- "Come Away With Me" by Norah Jones
- "Better Together" by Jack Johnson
- "Home" by Michael Bublé
- "The Way You Look Tonight" by Frank Sinatra
- "Wonderful Tonight" by Eric Clapton

### Day 7 - Valentine's Day (February 14)
**File:** `assets/music/valentine-day.mp3`

**Suggested Songs:**
- "Endless Love" by Diana Ross & Lionel Richie
- "Unchained Melody" by The Righteous Brothers
- "My Heart Will Go On" by Celine Dion
- "Everything I Do" by Bryan Adams
- "I Will Always Love You" by Whitney Houston
- "Your Song" by Elton John

### Day 8 - Kiss Day (February 15)
**File:** `assets/music/kiss-day.mp3`

**Suggested Songs:**
- "Kiss Me" by Sixpence None the Richer
- "Kiss From a Rose" by Seal
- "L-O-V-E" by Nat King Cole
- "The Power of Love" by Celine Dion
- "Crazy in Love" by Beyoncé

## Implementation Guide

### For Rose Day (day1-rose.html)
```html
<audio id="bgMusic" loop style="display: none;">
    <source src="../assets/music/rose-day.mp3" type="audio/mpeg">
</audio>
```

### For Valentine's Day (day7-valentine.html)
```html
<audio id="bgMusic" loop style="display: none;">
    <source src="../assets/music/valentine-day.mp3" type="audio/mpeg">
</audio>
```

### For Other Days
Follow the same pattern, replacing the filename with the appropriate song file.

## Notes

- All songs will auto-play when the user first interacts with the page (clicks anywhere)
- This is required by modern browsers to prevent unwanted autoplay
- Songs will loop continuously in the background
- No controls are shown to the user - music plays seamlessly
- Make sure you have the rights to use any music you add
- Consider using royalty-free music or properly licensed tracks

## Alternative: Royalty-Free Music Sources

If you need royalty-free music, consider these sources:
- **YouTube Audio Library** - Free music for content creators
- **Incompetech** - Free music by Kevin MacLeod
- **Bensound** - Free music with attribution
- **Free Music Archive** - Various free music options
- **Pixabay Music** - Free music and sound effects

Remember to check the licensing requirements for any music you use!
