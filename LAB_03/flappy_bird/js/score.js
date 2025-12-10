let highScores = loadHighScores();
let lastScore = 0;

function loadHighScores() {
    const key = "flappyHighScores";
    try {
        const stored = localStorage.getItem(key);
        if (!stored) return [];
        const arr = JSON.parse(stored);
        return Array.isArray(arr) ? arr : [];
    } catch (e) {
        return [];
    }
}

function saveHighScores() {
    const key = "flappyHighScores";
    localStorage.setItem(key, JSON.stringify(highScores));
}

function updateHighScores(newScore) {
    lastScore = newScore;
    highScores.push(newScore);
    highScores.sort((a, b) => b - a);
    if (highScores.length > 5) {
        highScores = highScores.slice(0, 5);
    }
    saveHighScores();
}

function getBestScore() {
    return highScores.length ? highScores[0] : 0;
}