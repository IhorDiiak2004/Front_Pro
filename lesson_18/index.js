

let time = 80; 
const timer = document.getElementById("timer");

const id = setInterval(() => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  timer.textContent = `${minutes}:${seconds}`;

  if (time-- <= 0) {
    clearInterval(id);
  }
}, 1000);

