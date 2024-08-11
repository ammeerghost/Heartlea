document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display response (you can implement actual email functionality later)
    const responseDiv = document.getElementById('form-response');
    responseDiv.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;

    // Reset the form
    this.reset();
});
