const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const data = [];

window.onload = async function () {
  const response = await fetch(endpoint);
  const json = await response.json();
  data.push(...json);
};

function formatNumberWithCommas(numberString) {
  let number = parseFloat(numberString);
  if (isNaN(number)) {
    return numberString;
  }

  return number.toLocaleString();
}

const inputElement = document.querySelector(".search");
const suggestionsElement = document.querySelector(".suggestions");

inputElement.addEventListener("input", (e) => {
  const { value } = e.target;
  const lowValue = value.toLowerCase();
  const filtered = data.filter(
    ({ city, state }) =>
      city.toLowerCase().includes(lowValue) ||
      state.toLowerCase().includes(lowValue)
  );

  suggestionsElement.innerHTML = "";
  filtered.forEach(({ city, state, population }) => {
    const nameSpanElement = document.createElement("span");
    nameSpanElement.textContent = city + ", " + state;

    const populationSpanElement = document.createElement("span");
    populationSpanElement.textContent = formatNumberWithCommas(population);

    const suggestionsItemElement = document.createElement("li");

    suggestionsItemElement.appendChild(nameSpanElement);
    suggestionsItemElement.appendChild(populationSpanElement);

    suggestionsElement.appendChild(suggestionsItemElement);
  });
});
