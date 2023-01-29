window.onload=function(){

// 1) Створити массив шляхів до зображень і створити слайдер який переключає кожні 3 секунди картинку,
// слайдер повинен бути зациклений, коли доходить до кінця массиву починає показувати зображення з 
// початку. Анімації і ефекти до слайдеру по бажанню.

let taskOneArr = [
    {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jumping_Humpback_whale.jpg/1280px-Jumping_Humpback_whale.jpg'},
    {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Common_dolphin_noaa.jpg/1920px-Common_dolphin_noaa.jpg'},
    {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1280px-Killerwhales_jumping.jpg'},
    {src:'https://rybkivse.ru/wp-content/uploads/2017/10/%D1%84%D0%BE%D1%82%D0%BE-2.jpeg'},
    {src:'https://zooclub.org.ua/assets/files/2018/01/gigantskaya-akula-molot.webp'}
];

let slider = document.querySelector('.TaskOne');
slider.setAttribute('style','transition: all ease 1s; left: 0; display: flex; position: relative;');

taskOneArr.forEach((item)=>{
    let createDiv = document.createElement('div');
    let createImg = document.createElement('img');
    createDiv.className = 'slider-item';
    createImg.setAttribute('src', item.src);
    createImg.setAttribute('style', 'height: 500px;')
    createDiv.appendChild(createImg);
    slider.appendChild(createDiv);
});

// -------автоперемикання картинок----------

let miliTimer = 0;

function AutoChange(){
    miliTimer += 500;
    if (miliTimer > 2500) {
        miliTimer = 0;
    };
    slider.style.left = -miliTimer + 'px';
};
setInterval(AutoChange, 3000);

// 2) Створити 2 кнопки які при кліку будуть перемикати зображення в слайдері, вперед назад.
  
// ---Cтворення кнопок---
let DivTaskTwo = document.querySelector('.TaskTwo');

let PreviousButton = document.createElement('button');
PreviousButton.setAttribute('class', 'leftButt');
PreviousButton.innerText = 'Previous';

let NextButton = document.createElement('button');
NextButton.setAttribute('class', 'RightButt')
NextButton.innerText = 'Next';

let DivWithButton = document.createElement('div');
DivWithButton.appendChild(PreviousButton);
DivWithButton.appendChild(NextButton);

DivTaskTwo.appendChild(DivWithButton);

// -----Перемикання кнопок---

document.querySelector('.RightButt').addEventListener('click', function () {
    miliTimer += 500;
    if (miliTimer > 2500) {
        miliTimer = 0;
    };
    slider.style.left = -miliTimer + 'px';
});

document.querySelector('.leftButt').addEventListener('click', function () {
    miliTimer -= 500;
    if (miliTimer < 0) {
        miliTimer = 2500;
    };
    slider.style.left = -miliTimer + 'px';
});

// 3) Зробити таймер який відраховує 60секунд і виводить розрахунок на сторінку, а потім відображає 
// alert('Ви дочикались знижок). Стилізування за бажанням.
let TasksThreeDiv = document.querySelector('.TaskThree');

let TimerTaskThree = function(){
    let SomeText = document.createElement('p');
    SomeText.innerText = 'Ви скоро дочекаєтесь знижок';

    TasksThreeDiv.appendChild(SomeText);
};

setTimeout(TimerTaskThree, 2000);

let TimerTaskThreePartTwo = function(){
    alert('Ви дочeкались знижок');
};

setTimeout(TimerTaskThreePartTwo, 6000);

// 4) Створити кнопку, по натисканню на кнопку повино зявлятись модальне вікно, в модалці повинна 
// бути кнопка закрити вікно. 
// Під модальним вікном повиний бути блок підкладка (на всю ширину сторінки) при кліку на який 
// модальне вікно закривається. 
// За допомгою js задайте left i top щоб вікно було по центру, для цього використайте 
// window.innerWidth і window.innerHeight а також визначте розміри блоку модального вікна.

let buttonFour = document.querySelector('.ButtTaskFour');
let divTaskFour = document.querySelector('.TaskFour');

let ModalWindow = function(){
    let createDiv = document.createElement('div');
    let createCloseButton = document.createElement('button');
    createDiv.setAttribute('class','modal');
    createDiv.setAttribute('style', 'display: flex; width: 60%; height: 20%; background-color: rgb(70,10,5); justify-content: end; margin-left: 20%')

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;  
    // createDiv.setAttribute('style', 'display: flex; width: `${windowWidth}`/2; height: `${windowHeight}`/2; background-color: rgb(70,10,5); justify-content: end;')


    createDiv.appendChild(createCloseButton);
    createCloseButton.innerText = 'X';
    createCloseButton.setAttribute('style', 'margin-top: 1rem; margin-bottom: 10rem; margin-right: 1rem;');

    let closeMOdal = function (){
        createDiv.setAttribute('style', 'display: none;');
    };

    createCloseButton.addEventListener('click', closeMOdal);

// ---------блок підкладка---------------------
    let createBlocDiv = document.createElement('div');
    createBlocDiv.setAttribute('style', 'display: flex; width: 100%; padding-top: 100px; background-color: red;')
    createBlocDiv.addEventListener('click', closeMOdal);
// -------------------------------------------

    divTaskFour.appendChild(createDiv);
    divTaskFour.appendChild(createBlocDiv);

// -----Розмір блоку мод вікна-------------

let WhatWidth = createDiv.clientWidth;
let WhatHeight = createDiv.clientHeight;
console.log(`ширина вікна ${WhatWidth} px, висота вікна ${WhatHeight} px`);

};

buttonFour.addEventListener('click', ModalWindow);

// закриття windowonload
}