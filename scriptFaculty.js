const scrollSections = document.querySelectorAll('.scroll-section');

// Function to check the visibility of sections
const checkScroll = () => {
    scrollSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the section is in the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('in-view');
        } else {
            // Reset the animation if section is out of the viewport
            section.classList.remove('in-view');
        }
    });
};

// Toggle Navbar for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// Listen for scroll events
window.addEventListener('scroll', checkScroll);

// Initial check to apply animation on page load
checkScroll();
