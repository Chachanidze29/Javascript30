const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular

console.log("Hello");

// Interpolated

const name = "Avto";

console.log(`Hello my name is ${name}`);

// Styled

console.log("%c I am different", "font-size: 30px; color: red");

// warning!

console.warn("Warning wuhuu");

// Error :|

console.error("Error Beep");

// Info

console.info("Info");

// Testing

console.assert(1 == "2", "wrong");

// clearing

console.clear();

// Viewing DOM Elements

const p = document.querySelector("p");

console.log(p);

console.dir(p);

console.clear();

// Grouping together

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`Name ${dog.name}`);
  console.log(`Age ${dog.age}`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("Avto");
console.count("Avto");
console.count("Avto");

// timing

console.clear();

console.time("fetching data");

fetch("https://api.github.com/users/chachanidze29")
  .then((data) => data.json())
  .then((data) => {
    console.log(data.name);
    console.timeEnd("fetching data");
  });

console.table(dogs);
