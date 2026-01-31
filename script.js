const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const confettiContainer = document.getElementById("confetti-container");

yesBtn.addEventListener("click", () => {
    createConfetti();

    setTimeout(() => {
        window.location.href = "yes.html";
    }, 1200); // enough time to enjoy confetti
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



// Move away on hover
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Return back when mouse leaves
noBtn.addEventListener("mouseleave", () => {
    noBtn.style.transform = "translate(0, 0)";
});
