const heroElement = document.querySelector(".hero");
const textElement = heroElement.querySelector("h1");

heroElement.addEventListener("mousemove", (e) => {
  const { offsetWidth: width, offsetHeight: height } = heroElement;
  let { offsetX: x, offsetY: y } = e;
  const walk = 100;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  textElement.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
`;
});
