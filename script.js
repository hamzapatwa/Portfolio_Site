
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