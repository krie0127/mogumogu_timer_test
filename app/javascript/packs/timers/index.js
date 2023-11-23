let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerText = "00:00:00";
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  document.getElementById("timer").innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// ↓受け渡したいデータを格納
const data = { timers: createImageBitmap, user_id: "<%= current_user.id if logged_in? %>", beat_id: "<%= @beat.id %>" }

// ↓送信したいURLと渡したいデータを指定
axios.post('/scores', data);
