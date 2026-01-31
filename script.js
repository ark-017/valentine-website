const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const confettiContainer = document.getElementById("confetti-container");

// YES button
yesBtn.addEventListener("click", () => {
    createConfetti();
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 1200);
});

// Function to move NO button
function moveNoButton() {
    const maxX = 140;
    const maxY = 140;

    const x = Math.random() * maxX * 2 - maxX;
    const y = Math.random() * maxY * 2 - maxY;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// 🖱 Desktop: hover
noBtn.addEventListener("mouseenter", moveNoButton);

// 📱 Mobile: touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // stop click
    moveNoButton();
});



// Confetti generator
function createConfetti() {
    const colors = ["#FFD36A", "#DB4888", "#F6DEB1", "#FF9AA2", "#E0B84F"];

    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            Math.random() * 1 + 1.2 + "s";

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}






