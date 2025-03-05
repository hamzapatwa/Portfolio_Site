
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetID);
        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - 60, // account for fixed header height
                behavior: 'smooth'
            });
        }
    });
});



    const burgerBtn = document.getElementById('burger-btn');
    const navLinks  = document.getElementById('nav-links');

    burgerBtn.addEventListener('click', () => {
    // If mobile nav is hidden, show it; otherwise hide it
    if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
} else {
    navLinks.style.display = 'flex';
}
});

    // OPTIONAL: If you want to force nav-links back to "flex" automatically
    // when resizing to large screens (so it doesn't remain hidden if user
    // had it toggled off), add a resize listener:
    window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
    // Return to normal horizontal display
    navLinks.style.display = 'flex';
} else {
    // Hide by default on small screens
    navLinks.style.display = 'none';
}
});
