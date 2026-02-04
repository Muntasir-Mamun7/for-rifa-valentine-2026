/**
 * Instagram Story Share Functionality
 * Professional and clean Instagram sharing for Valentine's Week pages
 */

// Configuration for each day
const dayConfigs = {
    'day1-rose': {
        emoji: '🌹',
        title: 'Rose Day',
        date: 'February 7, 2026',
        subtitle: 'The beginning of our story',
        message: [
            'Like a rose that blooms',
            'with each passing day,',
            'our love grows stronger',
            'in every way.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'Our journey begins',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    },
    'day2-propose': {
        emoji: '💍',
        title: 'Propose Day',
        date: 'February 8, 2026',
        subtitle: 'Will you be mine?',
        message: [
            'Under the starlit sky,',
            'I ask you to be mine.',
            'Forever and always,',
            'till the end of time.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'A promise of forever',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    },
    'day3-chocolate': {
        emoji: '🍫',
        title: 'Chocolate Day',
        date: 'February 9, 2026',
        subtitle: 'Sweet as our love',
        message: [
            'Ur love is sweeter',
            'than the finest chocolate,',
            'melting my heart with',
            'every moment we share.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'Sweetness in every bite',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    },
    'day4-teddy': {
        emoji: '🧸',
        title: 'Teddy Day',
        date: 'February 10, 2026',
        subtitle: 'A hug from afar',
        message: [
            'Though miles apart,',
            'this teddy holds my love,',
            'keeping u warm',
            'with hugs from above.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'Warmth across the distance',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    },
    'day5-promise': {
        emoji: '🤝',
        title: 'Promise Day',
        date: 'February 11, 2026',
        subtitle: 'My vow to you',
        message: [
            'I promise to love u,',
            'through thick and thin,',
            'forever and always,',
            'let our journey begin.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'A promise that lasts forever',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    },
    'day6-hug': {
        emoji: '🤗',
        title: 'Hug Day',
        date: 'February 12, 2026',
        subtitle: 'Wrapped in love',
        message: [
            'In ur embrace,',
            'I find my peace,',
            'a warmth that makes',
            'all worries cease.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'The warmth of your embrace',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    },
    'day7-valentine': {
        emoji: '❤️',
        title: 'Valentine\'s Day',
        date: 'February 14, 2026',
        subtitle: 'Our grand finale',
        message: [
            'On this special day,',
            'I celebrate our love,',
            'a bond so pure,',
            'blessed from above.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'Forever yours',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    },
    'day8-kiss': {
        emoji: '💋',
        title: 'Kiss Day',
        date: 'February 13, 2026',
        subtitle: 'A seal of our eternal bond',
        message: [
            'In ur kiss, I found my home.',
            'In ur embrace, I found my peace.',
            'In ur love, I found my forever.',
            '',
            '❤️ Valentine\'s Week 2026 ❤️'
        ],
        footer: 'Sealed with a kiss',
        colors: {
            start: '#1a0a0f',
            mid: '#2a0a1f',
            end: '#1a0515'
        }
    }
};

/**
 * Create Instagram Story Image
 */
async function createInstagramStory(dayKey) {
    const config = dayConfigs[dayKey];
    if (!config) {
        console.error('Day configuration not found:', dayKey);
        return null;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Instagram story dimensions (1080x1920)
    canvas.width = 1080;
    canvas.height = 1920;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, config.colors.start);
    gradient.addColorStop(0.5, config.colors.mid);
    gradient.addColorStop(1, config.colors.end);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative particles
    ctx.fillStyle = 'rgba(212, 175, 55, 0.1)';
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Add emoji
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
    ctx.shadowBlur = 20;
    ctx.fillText(config.emoji, canvas.width / 2, 300);
    
    // Add title
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 90px serif';
    ctx.fillText(config.title, canvas.width / 2, 480);

    // Add date
    ctx.font = '45px serif';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';
    ctx.fillText(config.date, canvas.width / 2, 560);

    // Add subtitle
    ctx.font = 'italic 40px serif';
    ctx.fillText(config.subtitle, canvas.width / 2, 630);

    // Add decorative border
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.lineWidth = 3;
    ctx.strokeRect(80, 720, canvas.width - 160, 650);

    // Add message
    ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
    ctx.font = 'italic 48px serif';
    
    let yPos = 870;
    config.message.forEach(line => {
        ctx.fillText(line, canvas.width / 2, yPos);
        yPos += 85;
    });

    // Add footer text
    ctx.font = '38px serif';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.fillText(config.footer, canvas.width / 2, 1650);

    // Add decorative hearts
    ctx.font = '65px Arial';
    const heartPositions = [
        { x: 150, y: 200 }, { x: 930, y: 250 },
        { x: 100, y: 1750 }, { x: 980, y: 1800 }
    ];
    ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
    heartPositions.forEach(pos => {
        ctx.fillText('💕', pos.x, pos.y);
    });

    // Add watermark
    ctx.font = '30px serif';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.fillText('For Rifa ❤️', canvas.width / 2, 1850);

    return canvas;
}

/**
 * Share to Instagram
 */
async function shareToInstagram(dayKey) {
    const loadingOverlay = document.getElementById('shareLoading');
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }

    try {
        let canvas;
        let title, text, filename;
        
        // Handle main page differently
        if (dayKey === 'main') {
            canvas = await createMainPageStory();
            title = 'Valentine\'s Week 2026';
            text = '8 days of love, countless memories ❤️';
            filename = 'valentines-week-2026.png';
        } else {
            // Create the story image for specific day
            canvas = await createInstagramStory(dayKey);
            const config = dayConfigs[dayKey];
            title = `${config.title} - Valentine's Week 2026`;
            text = `${config.subtitle} ❤️`;
            filename = `${dayKey}-story.png`;
        }
        
        if (!canvas) {
            throw new Error('Failed to create story image');
        }

        // Convert canvas to blob
        const blob = await new Promise(resolve => {
            canvas.toBlob(resolve, 'image/png', 1.0);
        });

        const file = new File([blob], filename, { type: 'image/png' });

        // Hide loading
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }

        // Try to share using Web Share API
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
                await navigator.share({
                    title: title,
                    text: text,
                    files: [file]
                });
            } catch (shareError) {
                if (shareError.name !== 'AbortError') {
                    // If share was cancelled, don't show error
                    console.log('Share cancelled or failed, downloading instead:', shareError);
                    downloadImage(blob, filename);
                }
            }
        } else {
            // Fallback: Download the image
            downloadImage(blob, filename);
            
            // Show helpful message
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                alert('Image downloaded! Open Instagram, create a story, and upload this image from your gallery. 📷');
            } else {
                alert('Image downloaded! You can now upload it to your Instagram story from your phone. 📷');
            }
        }
    } catch (error) {
        console.error('Error creating share image:', error);
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
        alert('Sorry, there was an error creating the share image. Please try again.');
    }
}

/**
 * Download image helper
 */
function downloadImage(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Get day key from current page
 */
function getCurrentDayKey() {
    const path = window.location.pathname;
    
    // Check if we're on main.html
    if (path.includes('main.html')) {
        return 'main';
    }
    
    const match = path.match(/day\d+-\w+/);
    return match ? match[0] : null;
}

/**
 * Create main page Instagram story
 */
async function createMainPageStory() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Instagram story dimensions (1080x1920)
    canvas.width = 1080;
    canvas.height = 1920;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#0a0a0a');
    gradient.addColorStop(0.5, '#1a0a0f');
    gradient.addColorStop(1, '#0d0507');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative particles
    ctx.fillStyle = 'rgba(212, 175, 55, 0.1)';
    for (let i = 0; i < 60; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Add main title
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 90px serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
    ctx.shadowBlur = 20;
    ctx.fillText('Valentine\'s Week', canvas.width / 2, 280);
    
    ctx.font = 'bold 110px serif';
    ctx.fillText('2026', canvas.width / 2, 420);

    // Add subtitle
    ctx.font = 'italic 45px serif';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';
    ctx.fillText('For Rifa ❤️', canvas.width / 2, 520);

    // Add decorative border
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.lineWidth = 3;
    ctx.strokeRect(80, 620, canvas.width - 160, 780);

    // Add 8 days with emojis
    const days = [
        { emoji: '🌹', name: 'Rose Day', date: 'Feb 7' },
        { emoji: '💍', name: 'Propose Day', date: 'Feb 8' },
        { emoji: '🍫', name: 'Chocolate Day', date: 'Feb 9' },
        { emoji: '🧸', name: 'Teddy Day', date: 'Feb 10' },
        { emoji: '🤝', name: 'Promise Day', date: 'Feb 11' },
        { emoji: '🤗', name: 'Hug Day', date: 'Feb 12' },
        { emoji: '💋', name: 'Kiss Day', date: 'Feb 13' },
        { emoji: '❤️', name: 'Valentine\'s Day', date: 'Feb 14' }
    ];

    ctx.fillStyle = 'rgba(212, 175, 55, 0.9)';
    let yPos = 730;
    
    days.forEach((day, index) => {
        if (index % 2 === 0) {
            // Left column
            ctx.textAlign = 'left';
            ctx.font = '45px Arial';
            ctx.fillText(day.emoji, 150, yPos);
            ctx.font = '38px serif';
            ctx.fillText(day.name, 220, yPos);
        } else {
            // Right column
            ctx.textAlign = 'left';
            ctx.font = '45px Arial';
            ctx.fillText(day.emoji, 600, yPos);
            ctx.font = '38px serif';
            ctx.fillText(day.name, 670, yPos);
            yPos += 85;
        }
    });

    // Add message at bottom
    ctx.textAlign = 'center';
    ctx.font = 'italic 42px serif';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.85)';
    ctx.fillText('8 days of love,', canvas.width / 2, 1550);
    ctx.fillText('countless memories', canvas.width / 2, 1620);

    // Add decorative hearts
    ctx.font = '65px Arial';
    const heartPositions = [
        { x: 150, y: 180 }, { x: 930, y: 220 },
        { x: 100, y: 1780 }, { x: 980, y: 1820 }
    ];
    ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
    heartPositions.forEach(pos => {
        ctx.fillText('💕', pos.x, pos.y);
    });

    // Add watermark
    ctx.font = '30px serif';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.fillText('February 7-14, 2026', canvas.width / 2, 1850);

    return canvas;
}

/**
 * Initialize share button for current page
 */
function initShareButton() {
    const dayKey = getCurrentDayKey();
    if (!dayKey) {
        console.warn('Could not determine day key from URL');
        return;
    }

    // Check if share button exists
    const shareButton = document.querySelector('.share-button');
    if (shareButton) {
        shareButton.onclick = () => shareToInstagram(dayKey);
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShareButton);
} else {
    initShareButton();
}
