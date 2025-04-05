document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".project-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("show");
                void entry.target.offsetWidth;
                entry.target.classList.add("show");
                entry.target.style.animationDelay = `${index * 0.2}s`;
            } else {
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

    // Show modal on eye icon click
    document.querySelectorAll('.fa-eye').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectItem = icon.closest('.project-item');
            const title = projectItem.querySelector('h3').innerText;
            const fullText = projectItem.querySelector('p').dataset.fulltext;
            const imageSrc = projectItem.querySelector('img').getAttribute('src');

            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDescription').innerText = fullText;
            document.getElementById('modalImage').setAttribute('src', imageSrc);

            document.getElementById('projectModal').style.display = 'block';
        });
    });

    // Close when clicking the "Close" button
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('projectModal').style.display = 'none';
    });

    // Close when clicking outside modal-content
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('projectModal');
        const content = document.querySelector('.modal-content');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});
