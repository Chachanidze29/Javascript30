const root = document.querySelector(":root");

const baseColorInput = document.getElementById("base");
const baseSpacingInput = document.getElementById("spacing");
const baseBlurInput = document.getElementById("blur");
const baseBorderRadiusInput = document.getElementById("border");

baseColorInput.addEventListener("input", (e) => {
  root.style.setProperty("--baseColor", e.target.value);
});
baseSpacingInput.addEventListener("mousemove", (e) => {
  root.style.setProperty("--baseSpacing", `${e.target.value}px`);
});
baseBorderRadiusInput.addEventListener("mousemove", (e) => {
  root.style.setProperty("--baseBorder", `${e.target.value}px`);
});
baseBlurInput.addEventListener("mousemove", (e) => {
  console.log();
  root.style.setProperty("--baseBlur", `${e.target.value}px`);
});
