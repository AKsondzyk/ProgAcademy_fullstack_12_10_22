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
let TaskOne = document.querySelector('.TaskOne');
let NewConter = document.createElement('div');
TaskOne.setAttribute('style', 'overflow: hidden;');
TaskOne.appendChild(NewConter);
NewConter.className = 'Slider';

let slider = document.querySelector('.Slider');
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

let Modal = document.querySelector('.Modal');
Modal.setAttribute('style', 'display: none;');

let Arround = document.querySelector('.Arround');
Arround.setAttribute('style', 'position: fixed; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6)');

let ModalBody = document.querySelector('.ModalBody');
ModalBody.setAttribute('style', 'display: flex; align-items: center; justify-content: center; padding: 3rem 1rem;}');

let ModalContent = document.querySelector('.ModalContent');
ModalContent.setAttribute('style', 'width: 50%; background-color: #fff; padding: 3rem; position: relative;');

let Close = document.querySelector('.close');
Close.setAttribute('style', 'position: absolute; right: 1rem; top: 1rem; color: red;');

let ModalWindow = function(){
    Modal.setAttribute('style', 'display: block; position: fixed; width: 100%; height: 100%; top: 0; left: 0;');
};

let closeMOdal = function (){
    Modal.setAttribute('style', 'display: none;');
};

let buttonFour = document.querySelector('.ButtTaskFour');
buttonFour.addEventListener('click', ModalWindow);

Close.addEventListener('click', closeMOdal);
Arround.addEventListener('click', closeMOdal);

// ---закриття windowonload---
};