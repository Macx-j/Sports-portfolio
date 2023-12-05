document
  .getElementById("message")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on 'Enter'

      // Simulate form submission
      const contactForm = document.getElementById("contact-form");
      const formData = new FormData(contactForm);

      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Process data here...

      // Clear form fields after successful submission
      contactForm.reset();

      // Display a success message or update the UI
      const responseMessage = document.getElementById("response-message");
      responseMessage.textContent = "Message sent successfully!";
    }
  });
