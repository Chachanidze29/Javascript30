function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function isScrolledIntoView(elem) {
  var docViewTop = window.scrollY || document.documentElement.scrollTop;
  var docViewBottom = docViewTop + window.innerHeight;

  var elemRect = elem.getBoundingClientRect();
  var elemTop =
    elemRect.top + window.scrollY || document.documentElement.scrollTop;
  var elemBottom = elemTop + elemRect.height;

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

const images = document.querySelectorAll(".slide-in");

window.addEventListener(
  "scroll",
  debounce((_e) => {
    images.forEach((elem) => {
      if (isScrolledIntoView(elem)) {
        elem.classList.add("active");
      }
    });
  })
);
