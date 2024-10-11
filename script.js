// Example: Adding interactivity
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.getAttribute('href').substring(1);
        document.querySelector('.main-content h1').textContent = section.charAt(0).toUpperCase() + section.slice(1);
        document.querySelector('.main-content p').textContent = `You are viewing the ${section} section.`;
    });
});
