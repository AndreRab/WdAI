const imgBackground = new Image();
imgBackground.src = "assets/Flappy Bird/background-day.png";

const imgBase = new Image();
imgBase.src = "assets/Flappy Bird/base.png";

const imgPipe = new Image();
imgPipe.src = "assets/Flappy Bird/pipe-green.png";

const birdSprites = [new Image(), new Image(), new Image()];
birdSprites[0].src = "assets/Flappy Bird/yellowbird-downflap.png";
birdSprites[1].src = "assets/Flappy Bird/yellowbird-midflap.png";
birdSprites[2].src = "assets/Flappy Bird/yellowbird-upflap.png";

const imgMessage = new Image();
imgMessage.src = "assets/UI/message.png";

const imgGameOver = new Image();
imgGameOver.src = "assets/UI/gameover.png";

const sfxFlap  = new Audio("assets/Sound Efects/wing.wav");
const sfxHit   = new Audio("assets/Sound Efects/hit.wav");
const dieHit   = new Audio("assets/Sound Efects/die.wav");
const sfxPoint = new Audio("assets/Sound Efects/point.wav");

const digitImages = [];

for (let i = 0; i <= 9; i++) {
    const img = new Image();
    img.src = `assets/UI/Numbers/${i}.png`; 
    digitImages.push(img);
}