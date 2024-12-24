const header = document.getElementById('header');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        // Show the header when scrolling down
        header.classList.add('show');
    } else {
        // Hide the header when at the top
        header.classList.remove('show');
    }
});
