// Завдання 3
// Створити блок на сторінці який переміщужться на 10рх в сторону стрілки яку натиснули.

let body = document.body;
body.setAttribute('style', 'display: flex; justify-content: center;')

let createDiv = document.createElement('div');
let topValue = 100;

createDiv.setAttribute('style','top: 100px; position: relative; display: flex; width: 200px; height: 200px; background-color: black; text-align: center; color: white;')
createDiv.innerText = 'Press key "left" "right" "up" or "down" ';

body.appendChild(createDiv);

// ------------------------------

window.onkeydown = function (event) {
  let code = event.keyCode;

  if (code == 37) {
    createDiv.style.right = createDiv.offsetLeft + -10 + "px";
  }

  if (code == 39) {
    createDiv.style.left = createDiv.offsetLeft + 10 + "px";
  }

  if (code == 38) {
    createDiv.style.top = createDiv.offsetTop + -10 + "px";
  }

  if (code == 40) {
    createDiv.style.top = createDiv.offsetTop + 10 + "px";
  }
};