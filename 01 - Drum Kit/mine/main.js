const mapCodes = {
  a: "clap",
  s: "hihat",
  d: "kick",
  f: "openhat",
  g: "boom",
  h: "ride",
  j: "snare",
  k: "tom",
  l: "tink",
};

document.addEventListener("keyup", (e) => {
  const key = e.key;
  const soundName = mapCodes[key];
  if (soundName) {
    const element = document.getElementById(key);
    element.classList.add("playing");
    const audio = new Audio("../assets/" + soundName + ".wav");
    audio.play();
    audio.addEventListener("ended", () => {
      element.classList.remove("playing");
    });
  }
});
