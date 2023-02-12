// Завдання 3
// Створити блок на сторінці який переміщужться на 10рх в сторону стрілки яку натиснули.

let body = document.body;
// body.setAttribute('style', 'display: flex; justify-content: center;')

let createDiv = document.createElement('div');
let topValue = 100;

createDiv.setAttribute('style',' position: relative; display: flex; width: 200px; height: 200px; background-color: black; text-align: center; color: white;'); // top: 100px;
createDiv.innerText = 'Press key "left" "right" "up" or "down" ';

body.appendChild(createDiv);

// ------------------------------

window.onkeydown = function (event) {
  let code = event.keyCode;
// ----Вліво----
  if (code == 37) {
    createDiv.style.left = createDiv.offsetLeft + -10 + "px";
    // createDiv.style.left =  -10 + "px";
  }
// ----Вправо----
  if (code == 39) {
    createDiv.style.left = createDiv.offsetLeft + 10 + "px";
  }
// ----Вверх----
  if (code == 38) {
    createDiv.style.top = createDiv.offsetTop + -10 + "px";
  }
// ----Вниз----
  if (code == 40) {
    createDiv.style.top = createDiv.offsetTop + 10 + "px";
  }
};
