document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById("contact-form").reset();
  });

function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  emailjs.sendForm("service_8g7a24q", "template_9ejhqiu", "#contact-form").then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
}
