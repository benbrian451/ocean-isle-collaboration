document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default page reload

        // Validate inputs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (name === "" || email === "" || phone === "") {
            formMessage.textContent = "Please fill out all fields correctly!";
            formMessage.style.color = "red";
            return;
        }

        // Display success message
        formMessage.textContent = "Thank you for signing up!";
        formMessage.style.color = "green";

        // Fade-out effect
        setTimeout(() => {
            formMessage.style.opacity = "0";
        }, 2000);

        // Clear fields after submission
        form.reset();
    });
});