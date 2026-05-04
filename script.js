document.addEventListener("DOMContentLoaded", function () {

    // Initialize EmailJS
    emailjs.init("CskEls1LAF063bOhK");

    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // ✅ VALIDATION
        if (!name || !email || !message) {
            status.textContent = "Please fill out all fields.";
            status.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            status.textContent = "Invalid email address.";
            status.style.color = "red";
            return;
        }

        // ✅ EMAIL PARAMETERS (must match your EmailJS template)
        const params = {
            from_name: name,
            from_email: email,
            message: message
        };

        status.textContent = "Sending...";
        status.style.color = "white";

        // ✅ SEND EMAIL
        emailjs.send("service_hecy34a", "template_um82kg9", params)
            .then(() => {
                status.textContent = "Message sent successfully!";
                status.style.color = "green";
                form.reset();
            })
            .catch((error) => {
                status.textContent = "Failed to send message.";
                status.style.color = "red";
                console.error("EmailJS Error:", error);
            });
    });

});