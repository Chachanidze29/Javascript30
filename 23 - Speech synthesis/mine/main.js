const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener("voiceschanged", (_e) => {
  voices = speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang === "en-US");

  const options = voices
    .map((voice) => `<option value=${voice.name}>${voice.name}</option>`)
    .join("");

  voicesDropdown.innerHTML = options;
});

voicesDropdown.addEventListener("change", () => {
  msg.voice = voices.find((voice) => voice.name === this.value);
});

speakButton.addEventListener("click", (_e) => {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  } else {
    speechSynthesis.speak(msg);
  }
});

stopButton.addEventListener("click", (_e) => {
  speechSynthesis.pause();
});

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
voicesDropdown.addEventListener("change", setVoice);
