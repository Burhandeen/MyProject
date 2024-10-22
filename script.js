const timeDisplay = document.querySelector("#timedisplay"); //This is to select the timedisplay element
const StartBtn = document.querySelector("#startBtn"); //This is to select the start button element
const PauseBtn = document.querySelector("#pauseBtn"); //This is to select the pause button
const ResetBtn = document.querySelector("#resetBtn"); // This is to select the reset button

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

StartBtn.addEventListener("click", () => {
  // This adds an event listener to startbutton
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
PauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
ResetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(setInterval);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
