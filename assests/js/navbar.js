document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarTogglerIcon = navbarToggler.querySelector("span");

    // Function to toggle the icon
    function toggleIcon() {
        if (navbarCollapse.classList.contains("show")) {
            navbarTogglerIcon.innerHTML = `<i class="fas fa-times"></i>`; // Close icon
        } else {
            navbarTogglerIcon.innerHTML = `<i class="fas fa-bars"></i>`; // Hamburger icon
        }
    }

    // Function to close the navbar
    function closeNavbar() {
        if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click(); // Trigger the collapse
        }
    }

    // Toggle the icon when the collapse state changes
    navbarToggler.addEventListener('click', toggleIcon);

    // Close the navbar when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", closeNavbar);
    });
});
