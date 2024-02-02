const listItems = [...document.querySelectorAll("li")];
const headerElement = document.querySelector("h1");

function timeToDecimal(t) {
  const arr = t.split(":");
  const dec = parseInt((arr[1] / 6) * 10, 10);

  const value = parseFloat(
    parseInt(arr[0], 10) + "." + (dec < 10 ? "0" : "") + dec
  );

  return value;
}

function decimalToTime(dec) {
  const [hours, minutes] = dec.split(".");

  return `Total time watched: ${hours} hours and ${minutes} minutes`;
}

const totalTime = listItems.reduce((total, listItem) => {
  return total + timeToDecimal(listItem.dataset.time);
}, 0);

headerElement.innerText = decimalToTime(String(totalTime));
