document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get target section ID
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Add fade-out class to the current section
            const currentSection = document.querySelector('.section.fade-in');
            if (currentSection) {
                fadeOut(currentSection);
            }

            // Add fade-in class to the target section
            setTimeout(() => {
                fadeIn(targetSection);
                smoothScrollTo(targetSection, 800); // Scroll to the target section
            }, 500); // Delay to allow fade-out to complete
        }
    });
});

// Smooth scrolling function
function smoothScrollTo(targetElement, duration) {
    const startY = window.scrollY;
    const targetY = targetElement.getBoundingClientRect().top + startY - 70; // Adjusted for navbar height
    const startTime = performance.now();

    function animationStep(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Progress between 0 and 1

        // Smooth easing function (ease-in-out)
        const easeInOutCubic = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const newY = startY + (targetY - startY) * easeInOutCubic;
        window.scrollTo(0, newY);

        if (elapsedTime < duration) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}

// Fade-out effect for the current section
function fadeOut(section) {
    section.classList.remove('fade-in');
    section.classList.add('fade-out');
}

// Fade-in effect for the target section
function fadeIn(section) {
    section.classList.remove('fade-out');
    section.classList.add('fade-in');

    // Re-trigger animations when returning to the home section
    if (section.id === 'home') {
        const h1 = section.querySelector('h1');
        const lead = section.querySelector('.lead');
        const explore = section.querySelector('.explore-btn');
        const socialIcons = section.querySelector('.social-icons');

        if (h1) {
            h1.style.animation = 'none'; // Reset animation
            setTimeout(() => {
                h1.style.animation = 'slideInFromLeft 1s ease-out';
            }, 8);
        }

        if (lead) {
            lead.style.animation = 'none'; // Reset animation
        
            // Check if screen is mobile
            const isMobile = window.innerWidth <= 768;
        
            if (isMobile) {
                // Use slideInFromLeft on mobile
                setTimeout(() => {
                    lead.style.animation = 'slideInFromLeft 1s ease-out';
                }, 8);
            } else {
                // Use typing animation on larger screens
                lead.style.width = '0';
                setTimeout(() => {
                    lead.style.animation = 'typing 5s steps(30, end), blink 0.5s step-end infinite';
                    lead.style.animationFillMode = 'forwards';
                }, 1010);
            }
        }        

        if (explore) {
            explore.style.animation = 'none'; // Reset animation
            setTimeout(() => {
                explore.style.animation = 'fadeIn 1s ease-out';
            }, 8);
        }

        if (socialIcons) {
            socialIcons.style.animation = 'none'; // Reset animation
            setTimeout(() => {
                socialIcons.style.animation = 'slideInFromLeft 1s ease-out';
            }, 8);
        }
    }
}

// Scroll event listener to handle fade effect while scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the window

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // If the section is in the viewport, add fade-in class
        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (!section.classList.contains('fade-in')) {
                fadeIn(section);
            }
        } else {
            if (section.classList.contains('fade-in')) {
                fadeOut(section);
            }
        }
    });
});
