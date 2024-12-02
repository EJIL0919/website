// Toggle Navbar for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Event listener to toggle the hamburger menu on click
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});

// Event listener to close the mobile menu if clicked outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Close the mobile menu when clicking outside the nav or hamburger
    if (
        !nav.contains(e.target) &&
        !hamburger.contains(e.target) &&
        !navLinks.contains(e.target)
    ) {
        nav.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Dropdown toggle for Instruction and Research menus
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    // Show dropdown content on hover
    dropdown.addEventListener('mouseover', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    });

    // Hide dropdown content when mouse leaves
    dropdown.addEventListener('mouseout', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });
});

// Optional: Add smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Smooth scroll to the target section
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }

        // Close the mobile menu after navigation (if open)
        const nav = document.querySelector('nav');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        nav.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});