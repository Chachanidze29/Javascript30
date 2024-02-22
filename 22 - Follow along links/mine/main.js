const links = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;

  highlight.style.transform = `translate(${linkCoords.left}px, ${
    linkCoords.top + window.scrollY
  }px)`;
}

links.forEach((link) => {
  link.addEventListener("mouseenter", highlightLink);
});
