
// dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// aumenta e diminui fonte
const increaseButton = document.getElementById("aumenta-font");
const decreaseButton = document.getElementById("diminui-font");
let fontSize = 16;
const minFontSize = 12;
const maxFontSize = 30;

increaseButton.addEventListener("click", () => {
  if (fontSize < maxFontSize) {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
  } else {
    alert("Você já atingiu o tamanho máximo de fonte!");
  }
});

decreaseButton.addEventListener("click", () => {
  if (fontSize > minFontSize) {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
  } else {
    alert("Você já atingiu o tamanho mínimo de fonte!");
  }
});
