document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetID);
        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

const burgerBtn = document.getElementById('burger-btn');
const navLinks  = document.getElementById('nav-links');

// Burger toggle
burgerBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

// Force initial state based on screen width
if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
} else {
    navLinks.style.display = 'none';
}

// On resize, revert to correct display
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Return to normal horizontal display
        navLinks.style.display = 'flex';
    } else {
        // Hide by default on small screens
        navLinks.style.display = 'none';
    }
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function detectTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
}

document.addEventListener('DOMContentLoaded', detectTheme);

// Toggle function
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});