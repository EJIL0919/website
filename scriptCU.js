// Toggle Navbar for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// Enhanced toggle with smooth height transition
document.querySelectorAll('.program h4').forEach(header => {
    header.addEventListener('click', () => {
        const list = header.nextElementSibling;

        // Check if the list is already open
        if (list.classList.contains('show')) {
            list.classList.remove('show');
            list.style.maxHeight = null; // Collapse the list
        } else {
            list.classList.add('show');
            list.style.maxHeight = list.scrollHeight + "px"; // Expand the list
        }
    });
});


