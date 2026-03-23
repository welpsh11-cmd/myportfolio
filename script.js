// ===== 1. Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ===== 2. Dark / Light Mode Toggle =====
const themeBtn = document.querySelector('#themeBtn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem("theme", "light");
    }
});

// ===== 3. Load Saved Theme =====
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark");
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }
});

// ===== 4. Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== 5. Contact Form =====
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('🎉 Message sent! Thanks for contacting me!');
    form.reset();
});