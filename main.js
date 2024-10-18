document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const responseDiv = document.getElementById("formResponse");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Simulating a form submission response
        if (name && email && message) {
            // Display a success message
            responseDiv.innerText = "Thank you for your message, " + name + "! We will get back to you soon.";
            responseDiv.style.color = "green";

            // Clear the form fields after submission
            form.reset();
        } else {
            // Display an error message
            responseDiv.innerText = "Please fill out all fields.";
            responseDiv.style.color = "red";
        }
    });
});