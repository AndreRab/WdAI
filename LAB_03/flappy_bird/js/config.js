const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let gameState = "start";

const BASE_HEIGHT = 110;

const PIPE_WIDTH = 52;
const PIPE_GAP = 100;
const PIPE_DISTANCE = 170;
const PIPE_SPEED = 2;

const pipes = [];
let score = 0;

const retryButton = {
    x: WIDTH / 2 - 70,
    y: HEIGHT / 2 + 60,
    width: 140,
    height: 40
};

let crashing = false;

const bird = {
    x: 60,
    y: HEIGHT / 2,
    width: 34,
    height: 24,
    velocity: 0,
    gravity: 0.35,
    jumpStrength: -6.5,
    rotation: 0,
    spriteIndex: 0,
    spriteTimer: 0,
    alive: true
};