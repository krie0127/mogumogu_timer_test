let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

function startTimer() {
  console.log("startTime")
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

// document.getElementById("start").addEventListener("click", startTimer);
// document.getElementById("stop").addEventListener("click", stopTimer);
// document.getElementById("reset").addEventListener("click", resetTimer);
// document.getElementById("saveTime").addEventListener("click", saveTimerDataToDB);

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("startTimer").addEventListener("click", startTimer);
  document.getElementById("stopTimer").addEventListener("click", stopTimer);
  document.getElementById("resetTimer").addEventListener("click", resetTimer);
  document.getElementById("saveTimer").addEventListener("click", saveTimerDataToDB);
});

// ユーザーIDとビートIDを取得
const userId = document.getElementById('user-info').dataset.userId;
const beatId = document.getElementById('beat-info').dataset.beatId;

// タイマーが停止されたときに呼び出される関数
function saveTimerDataToDB() {
  const data = {
    user_id: userId,
    beat_id: beatId,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };

// axios.post('/scores', data)
    // .then(response => {
    //   console.log('Data saved to database:', response.data);
      // サーバーにデータが保存された後の処理
    // })
    // .catch(error => {
    //   console.error('Error saving data:', error);
      // エラー時の処理
    // });
}

const onClickPost = () => {
  const url = "http://localhost:3000"
  const obj = {hours: hours, minutes: minutes, seconds: seconds}
  console.log(JSON.stringify(obj))
  const res = fetch(url, {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   },
  body: JSON.stringify(obj)
  })
  const data = res.json()
  
  console.log(data)
}

$.ajax({
  type: "POST",
  url: "/stopwatches", // Railsのルーティングに合わせてパスを設定
  data: { stopwatch: { time: timeData } }, // timeDataはストップウォッチの時間データ
  dataType: "json"
});
