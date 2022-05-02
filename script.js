const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const daysEl = document.getElementById("days");
const secondsEl = document.getElementById("seconds");

const launchDate = "16 May 2022";

function countDown() {
  const finalDate = new Date(launchDate);
  const currentDate = new Date();

  //   console.log(finalDate - currentDate);

  const seconds = (finalDate - currentDate) / 1000;

  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const min = Math.floor(seconds / 60) % 60;
  const sec = Math.floor(seconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(min);
  secondsEl.innerHTML = formatTime(sec);

  console.log(days, hours, min, sec);
}
countDown();

setInterval(countDown, 1000);
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
