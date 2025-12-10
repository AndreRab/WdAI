document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        handleInput();
    }
});

canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (gameState === "over") {
        if (
            x >= retryButton.x &&
            x <= retryButton.x + retryButton.width &&
            y >= retryButton.y &&
            y <= retryButton.y + retryButton.height
        ) {
            gameState = "start";
        }
    } else {
        handleInput();
    }
});

function handleInput() {
    if (gameState === "start") {
        resetGame();
        gameState = "play";
        flap();
    } else if (gameState === "play") {
        flap();
    } else if (gameState === "over") {
        gameState = "start";
    }
}

function flap() {
    if (!bird.alive) return;
    bird.velocity = bird.jumpStrength;
    sfxFlap.currentTime = 0;
    sfxFlap.play().catch(() => {});
}