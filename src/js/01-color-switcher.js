const startColorSwitcher = document.querySelector('button[data-start]');
const stopColorSwitcher = document.querySelector('button[data-stop]');
const body = document.querySelector("body");

let timerId = null;

const disableButton = () => {
    startColorSwitcher.disabled = true;
};

const undisableButton = () => {
    startColorSwitcher.disabled = false;
};

startColorSwitcher.addEventListener("click", () => {
  timerId = setInterval(() => {
   changeColor() ;
  }, 1000);
    disableButton();
});

stopColorSwitcher.addEventListener("click", () => {
    clearInterval(timerId);
     undisableButton();
});

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};