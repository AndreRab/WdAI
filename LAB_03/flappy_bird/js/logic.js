function resetGame() {
    score = 0;
    bird.x = 60;
    bird.y = HEIGHT / 2;
    bird.velocity = 0;
    bird.rotation = 0;
    bird.spriteIndex = 0;
    bird.spriteTimer = 0;
    bird.alive = true;
    crashing = false;

    pipes.length = 0;
    for (let i = 0; i < 3; i++) {
        addPipe(WIDTH + i * PIPE_DISTANCE);
    }
}

function addPipe(startX) {
    const minY = 50;
    const maxY = HEIGHT - BASE_HEIGHT - 50 - PIPE_GAP;
    const gapY = Math.random() * (maxY - minY) + minY;

    pipes.push({
        x: startX,
        gapY: gapY,
        passed: false
    });
}

function update() {
    if (gameState === "play") {
        updateBird();
        updatePipes();
        checkCollisions();
    } else if (gameState === "start") {
        bird.spriteTimer++;
        if (bird.spriteTimer % 10 === 0) {
            bird.spriteIndex = (bird.spriteIndex + 1) % birdSprites.length;
        }
    }
}

function updateBird() {
    if (crashing || bird.alive) {
        bird.velocity += bird.gravity;
        bird.y += bird.velocity;

        const maxDown = 90 * Math.PI / 180;
        const maxUp = -25 * Math.PI / 180;
        const t = Math.max(-8, Math.min(10, bird.velocity));
        bird.rotation = maxUp + (t + 8) / 18 * (maxDown - maxUp);
    }

    bird.spriteTimer++;
    if (bird.spriteTimer % 5 === 0) {
        bird.spriteIndex = (bird.spriteIndex + 1) % birdSprites.length;
    }

    const groundY = HEIGHT - BASE_HEIGHT;
    if (crashing && bird.y + bird.height / 2 >= groundY) {
        bird.y = groundY - bird.height / 2;
        bird.velocity = 0;
        bird.alive = false;
        crashing = false;
        gameState = "over";
        updateHighScores(score);
    }
}

function updatePipes() {
    for (let i = 0; i < pipes.length; i++) {
        const p = pipes[i];
        p.x -= PIPE_SPEED;

        if (!p.passed && p.x + PIPE_WIDTH < bird.x) {
            p.passed = true;
            score++;
            sfxPoint.currentTime = 0;
            sfxPoint.play().catch(() => {});
        }
    }

    if (pipes.length && pipes[0].x + PIPE_WIDTH < 0) {
        pipes.shift();
        addPipe(pipes[pipes.length - 1].x + PIPE_DISTANCE);
    }
}

function checkCollisions() {
    if (!bird.alive) return;

    const groundY = HEIGHT - BASE_HEIGHT;

    if (bird.y + bird.height / 2 >= groundY || bird.y - bird.height / 2 <= 0) {
        triggerCrash();
        return;
    }

    for (let i = 0; i < pipes.length; i++) {
        const p = pipes[i];

        const birdLeft = bird.x - bird.width / 2;
        const birdRight = bird.x + bird.width / 2;
        const birdTop = bird.y - bird.height / 2;
        const birdBottom = bird.y + bird.height / 2;

        const pipeLeft = p.x;
        const pipeRight = p.x + PIPE_WIDTH;
        const gapTop = p.gapY;
        const gapBottom = p.gapY + PIPE_GAP;

        const inPipeX = birdRight > pipeLeft && birdLeft < pipeRight;
        const hitsTopPipe = birdTop < gapTop;
        const hitsBottomPipe = birdBottom > gapBottom;

        if (inPipeX && (hitsTopPipe || hitsBottomPipe)) {
            triggerCrash();
            return;
        }
    }
}

function triggerCrash() {
    if (!bird.alive || crashing) return;
    bird.alive = false;
    crashing = true;
    sfxHit.currentTime = 0;
    sfxHit.play().catch(() => {});
    dieHit.play().catch(() => {});
}