document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".project-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Reset animation
                entry.target.classList.remove("show"); // Ensure reflow
                void entry.target.offsetWidth; // Trigger reflow to restart animation
                entry.target.classList.add("show");
                entry.target.style.animationDelay = `${index * 0.2}s`;
            } else {
                // Remove show class when out of view to allow reanimation
                entry.target.classList.remove("show");
                entry.target.style.animationDelay = '0s';
            }
        });
    }, {
        threshold: 0.5
    });

    projectItems.forEach(item => {
        observer.observe(item);
    });

    // Optional: alert on click
    projectItems.forEach(item => {
        item.addEventListener("click", function () {
            const projectName = item.querySelector("h3").innerText;
            alert("You clicked on " + projectName);
        });
    });
});
