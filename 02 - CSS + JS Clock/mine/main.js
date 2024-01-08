const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(() => {
  const now = new Date();
  const seconds = now.getSeconds();
  const sDegree = (seconds / 60) * 360 + 90;
  const minutes = now.getMinutes();
  const mDegree = (minutes / 60) * 360 + 90;
  const hours = now.getHours();
  const hDegree = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${sDegree}deg)`;
  minHand.style.transform = `rotate(${mDegree}deg)`;
  hourHand.style.transform = `rotate(${hDegree}deg)`;
}, 1000);
