document.addEventListener('DOMContentLoaded', function () {
    const profileImg = document.getElementById('profileImage');

    profileImg.onload = function () {
        this.classList.add('loaded');
    };

    // In case the image is cached
    if (profileImg.complete) {
        profileImg.classList.add('loaded');
    }
});


const email = "sundaygift34@gmail.com";
const emailText = document.getElementById("emailText");
let index = 0;

function typeChar() {
    if (index < email.length) {
        emailText.textContent += email.charAt(index);
        index++;
        setTimeout(typeChar, 100);
    } else {
        // Restart after 10 seconds
        setTimeout(() => {
            emailText.textContent = "";
            index = 0;
            typeChar();
        }, 10000);
    }
}

window.onload = typeChar;

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate elements when scrolling
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.animationPlayState = 'running';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Start email animation when page loads
// Start email animation when page loads
// window.onload = typeEmail;


// project script section
// Scroll animation for projects section
document.addEventListener('DOMContentLoaded', function () {
    const projectsSection = document.querySelector('.projects');
    const sectionTitle = document.querySelector('.section-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const projectCards = document.querySelectorAll('.project-card');
    const viewMore = document.querySelector('.view-more');

    function animateOnScroll() {
        const sectionPosition = projectsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            sectionTitle.classList.add('animate');
            sectionSubtitle.classList.add('animate');

            projectCards.forEach(card => {
                card.classList.add('animate');
            });

            viewMore.classList.add('animate');
        }
    }

    // Run once on page load
    animateOnScroll();

    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Contact section

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Additional animation triggers
document.addEventListener('DOMContentLoaded', function () {
    // Add hover effect to education cards
    const educationCards = document.querySelectorAll('.education');
    educationCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.03) rotateX(0)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form input focus effects
    const inputs = document.querySelectorAll('.innDev input, .innDev textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentNode.querySelector('label').style.color = 'var(--primary-color)';
        });
        input.addEventListener('blur', function () {
            this.parentNode.querySelector('label').style.color = 'var(--text-color)';
        });
    });
});

// service script

// Additional interactive effects
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        // Add mouse tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });

        // Reset position when mouse leaves
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
        });
    });
});