function drawBackground() {
    ctx.drawImage(imgBackground, 0, 0, WIDTH, HEIGHT);
}

function drawBase() {
    ctx.drawImage(imgBase, 0, HEIGHT - BASE_HEIGHT);
}

function drawBird() {
    const sprite = birdSprites[bird.spriteIndex];
    ctx.save();
    ctx.translate(bird.x, bird.y);
    ctx.rotate(bird.rotation);
    ctx.drawImage(
        sprite,
        -bird.width / 2,
        -bird.height / 2,
        bird.width,
        bird.height
    );
    ctx.restore();
}

function drawPipes() {
    for (let i = 0; i < pipes.length; i++) {
        const p = pipes[i];

        ctx.save();
        ctx.translate(p.x + PIPE_WIDTH / 2, p.gapY);
        ctx.scale(1, -1);
        ctx.drawImage(imgPipe, -PIPE_WIDTH / 2, 0);
        ctx.restore();

        ctx.drawImage(imgPipe, p.x, p.gapY + PIPE_GAP);
    }
}

function drawScoreImages(score, x, y) {
    const digits = score.toString().split("");

    let totalWidth = 0;
    const spacing = 2;

    for (const d of digits) {
        totalWidth += digitImages[d].width + spacing;
    }

    totalWidth -= spacing; 

    let drawX = x - totalWidth / 2;

    for (const d of digits) {
        const img = digitImages[d];
        ctx.drawImage(img, drawX, y);
        drawX += img.width + spacing;
    }
}

function drawStartScreen() {
    drawBackground();
    drawBase();

    const msgX = WIDTH / 2 - imgMessage.width / 2;
    const msgY = HEIGHT / 4;
    ctx.drawImage(imgMessage, msgX, msgY);

    drawBird();

    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Naciśnij SPACJĘ lub kliknij", WIDTH / 2, HEIGHT - 60);
}

function drawGameOverScreen() {
    drawBackground();
    drawPipes();
    drawBase();
    drawBird();

    const gX = WIDTH / 2 - imgGameOver.width / 2;
    const gY = HEIGHT / 4;
    ctx.drawImage(imgGameOver, gX, gY);

    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    const best = getBestScore();

    ctx.fillText("Wynik: " + lastScore, WIDTH / 2, gY + 60);
    ctx.fillText("Najlepszy: " + best, WIDTH / 2, gY + 80);

    ctx.fillStyle = "#ffcc00";
    ctx.fillRect(retryButton.x, retryButton.y, retryButton.width, retryButton.height);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(retryButton.x, retryButton.y, retryButton.width, retryButton.height);

    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Zagraj ponownie", WIDTH / 2, retryButton.y + 26);
}