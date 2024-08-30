document.addEventListener('DOMContentLoaded', function() {
    // Dynamic welcome message
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const welcomeMessage = document.getElementById('welcome-message');

    if (hours < 12) {
        welcomeMessage.textContent = 'Good Morning! Check out today\'s sports news.';
    } else if (hours < 18) {
        welcomeMessage.textContent = 'Good Afternoon! Don\'t miss the latest updates.';
    } else {
        welcomeMessage.textContent = 'Good Evening! Catch up on today\'s highlights.';
    }

    // Form validation
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        feedback.textContent = 'Thank you for reaching out!';
        feedback.style.color = 'green';
        form.reset();
    });
});
