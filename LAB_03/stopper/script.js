let seconds = 0;
let interval = null;

function updateDisplay() {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  document.getElementById("time").textContent =
    min > 0 ? `${min}min ${sec}s` : `${sec}s`;
}

document.getElementById("start").addEventListener("click", () => {
  if (interval === null) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
});
