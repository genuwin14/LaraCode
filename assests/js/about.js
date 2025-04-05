document.addEventListener("DOMContentLoaded", function () {
    const techItems = document.querySelectorAll(".tech-item");
    const aboutSection = document.getElementById("about");

    function resetAndAnimateTechStack() {
        techItems.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transform = "translateX(-50px)";
            item.style.animation = "none";
            item.offsetHeight; // Force reflow for reliable animation restart

            setTimeout(() => {
                item.style.animation = "slideInLeft 0.6s ease-in-out forwards";
            }, index * 200);
        });
    }

    function animateGoal() {
        const goalItem = document.querySelector(".goals li");
        goalItem.style.opacity = "0";
        goalItem.style.transform = "translateX(-50px)";
        goalItem.style.animation = "none";
        goalItem.offsetHeight;
        goalItem.style.animation = "slideInLeft 0.6s ease-in-out forwards";
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                resetAndAnimateTechStack();
                animateGoal();
            }
        });
    }, { threshold: 0.1 }); // 👈 trigger when only 10% of #about is visible    

    observer.observe(aboutSection);
});
