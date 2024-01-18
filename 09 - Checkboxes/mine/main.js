const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let isShiftPressed = false;
const shiftKeyCode = 16;
let lastCheckedCheckbox = null;

window.onkeyup = function (e) {
  if (e.keyCode === shiftKeyCode) {
    isShiftPressed = false;
    lastCheckedCheckbox = null;
  }
};
window.onkeydown = function (e) {
  if (e.keyCode === shiftKeyCode) {
    isShiftPressed = true;
  }
};

const handleCheck = (e, ind) => {
  if (lastCheckedCheckbox !== null && isShiftPressed) {
    let startInd, endInd;

    if (lastCheckedCheckbox > ind) {
      startInd = ind;
      endInd = lastCheckedCheckbox + 1;
    } else {
      startInd = lastCheckedCheckbox;
      endInd = ind + 1;
    }

    const selectedElements = Array.prototype.slice.call(
      checkboxes,
      startInd,
      endInd
    );

    selectedElements.forEach((element) => {
      element.checked = true;
    });
  }
  lastCheckedCheckbox = ind;
};

checkboxes.forEach((checkbox, ind) => {
  checkbox.addEventListener("change", (e) => handleCheck(e, ind));
});
