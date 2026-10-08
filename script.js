// ===============================
// TYPING ANIMATION
// ===============================

const text = "Cybersecurity Enthusiast | Developer";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

typeText();


// ===============================
// CYBER THREAT SIMULATOR
// ===============================

document.getElementById("analyzeBtn").addEventListener("click", function () {

    const input = document.getElementById("threatInput").value.toLowerCase().trim();
    const result = document.getElementById("threatResult");

    if (input === "") {
        result.innerHTML = "Please enter some sample text.";
        return;
    }

    const highRiskWords = [
        "password",
        "credit card",
        "bank account",
        "otp",
        "malware",
        "ransomware"
    ];

    const mediumRiskWords = [
        "login",
        "verify",
        "urgent",
        "click",
        "download",
        "link"
    ];

    let riskLevel = "LOW";

    for (let word of highRiskWords) {
        if (input.includes(word)) {
            riskLevel = "HIGH";
            break;
        }
    }

    if (riskLevel !== "HIGH") {
        for (let word of mediumRiskWords) {
            if (input.includes(word)) {
                riskLevel = "MEDIUM";
                break;
            }
        }
    }

    result.innerHTML = `
        <strong>Risk Level: ${riskLevel}</strong>
        <br>
        Educational simulation based on predefined rules.
    `;
});


// ===============================
// CONTACT FORM VALIDATION
// ===============================

document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.innerHTML = "Please fill in all fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.innerHTML = "Please enter a valid email address.";
        return;
    }

    formMessage.innerHTML = "Message submitted successfully!";

    document.getElementById("contactForm").reset();
});