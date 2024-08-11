document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can replace this part with actual email sending logic or an API call
    document.getElementById("response").innerText = "Thank you for your message, " + name + "! We will get back to you shortly.";

    // Reset form fields
    document.getElementById("contactForm").reset();
});
