function gameLoop() {
    if (gameState === "start") {
        drawStartScreen();
    } else if (gameState === "play") {
        drawBackground();
        drawPipes();
        drawBase();
        drawBird();
        drawScoreImages(score, WIDTH / 2, 20);
    } else if (gameState === "over") {
        drawGameOverScreen();
    }
        
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();