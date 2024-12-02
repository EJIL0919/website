// Toggle the visibility of the report list when the button is clicked
function toggleReports() {
    var reportList = document.getElementById("report-list");
    if (reportList.style.display === "block") {
        reportList.style.display = "none";
    } else {
        reportList.style.display = "block";
    }
}

// Toggle Navbar for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

