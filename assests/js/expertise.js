document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".expertise-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add with staggered delay
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 150);
                } else {
                    // Remove class when it's out of view to allow restart
                    entry.target.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.3,
        }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });
});
