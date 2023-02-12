// Завдання 3
// Створити блок на сторінці який переміщужться на 10рх в сторону стрілки яку натиснули.

let body = document.body;
body.setAttribute('style', 'display: flex; justify-content: center;')

let createDiv = document.createElement('div');
let topValue = 100;

createDiv.setAttribute('style', ' position: relative; display: flex; width: 200px; height: 200px; background-color: black; text-align: center; color: white;');
createDiv.innerText = 'Press key "left" "right" "up" or "down" ';

body.appendChild(createDiv);

// ------------------------------

let valueLeft = 0;
let valueTop = 0;

window.onkeydown = function (event) {
  let code = event.keyCode;
  // ----Вліво----
  if (code == 37) {

    valueLeft = valueLeft - 10;

    createDiv.style.left = `${valueLeft}` + "px";
  }
  // ----Вправо----
  if (code == 39) {

    valueLeft = valueLeft + 10;

    createDiv.style.left = `${valueLeft}` + "px";
  }
  // ----Вверх----
  if (code == 38) {

    valueTop = valueTop - 10;

    createDiv.style.top = `${valueTop}` + "px";
  }
  // // ----Вниз----
  if (code == 40) {
    valueTop = valueTop + 10;

    createDiv.style.top = `${valueTop}` + "px";
  }
};
