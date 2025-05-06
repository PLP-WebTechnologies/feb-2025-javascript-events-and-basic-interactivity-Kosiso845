document.addEventListener("DOMContentLoaded", () => {
    // Button Click Event
    document.getElementById("clickButton").addEventListener("click", () => {
        alert("Button Clicked!");
    });

    // Change Button Color
    function ChangeColor() {
        document.body.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    // Long Press Event
    let longPressTimer;
    document.getElementById("secretButton").addEventListener("mousedown", () => {
        longPressTimer = setTimeout(() => alert("Long Press Activated!"), 1000);
    });

    document.getElementById("secretButton").addEventListener("mouseup", () => {
        clearTimeout(longPressTimer);
    });

    // Slideshow Functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);

    // Keypress Detection
    document.addEventListener("keypress", (event) => {
        document.getElementById("keyInfo").textContent = `You pressed: ${event.key}`;
    });

    // Form Validation
    document.getElementById("registrationForm").addEventListener("submit", (event) => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const emailFeedback = document.getElementById("emailFeedback");
        const passwordFeedback = document.getElementById("passwordFeedback");

        emailFeedback.textContent = "";
        passwordFeedback.textContent = "";

        let valid = true;

        if (!email.includes("@")) {
            emailFeedback.textContent = "Invalid email format!";
            valid = false;
        }

        if (password.length < 8) {
            passwordFeedback.textContent = "Password must be at least 8 characters!";
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
