// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

menuToggle.addEventListener('click', () => {
const isOpen = siteNav.classList.toggle('open');
menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu after clicking a nav link (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', () => {
siteNav.classList.remove('open');
menuToggle.setAttribute('aria-expanded', 'false');
});
});

// Booking modal
const bookNowBtn = document.getElementById('bookNowBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');

bookNowBtn.addEventListener('click', () => {
modalBackdrop.classList.add('open');
});

modalClose.addEventListener('click', () => {
modalBackdrop.classList.remove('open');
});

modalBackdrop.addEventListener('click', (e) => {
if (e.target === modalBackdrop) {
modalBackdrop.classList.remove('open');
}
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
