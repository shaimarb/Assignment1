// JavaScript to redirect to the homepage on form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = '/';
});