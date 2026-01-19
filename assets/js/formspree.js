/**
 * Formspree Contact Form Handler
 * Handles form submission with visual feedback
 */

(function() {
  'use strict';

  const form = document.getElementById('contact-form');
  const statusMessage = document.querySelector('.status-message');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Show loading state
      statusMessage.innerHTML = '<div class="alert alert-info">Sending message...</div>';

      // Disable submit button
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Get form data
      const formData = new FormData(form);

      // Submit to Formspree
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Success
          statusMessage.innerHTML = '<div class="alert alert-success">Your message has been sent successfully! Thank you for contacting me.</div>';
          form.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            statusMessage.innerHTML = '';
          }, 5000);
        } else {
          // Error from Formspree
          return response.json().then(data => {
            if (data.errors) {
              statusMessage.innerHTML = '<div class="alert alert-danger">Oops! There was a problem: ' + data.errors.map(error => error.message).join(', ') + '</div>';
            } else {
              statusMessage.innerHTML = '<div class="alert alert-danger">Oops! There was a problem sending your message.</div>';
            }
          });
        }
      })
      .catch(error => {
        // Network error
        statusMessage.innerHTML = '<div class="alert alert-danger">Oops! There was a problem sending your message. Please try again later.</div>';
      })
      .finally(() => {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
    });
  }
})();
