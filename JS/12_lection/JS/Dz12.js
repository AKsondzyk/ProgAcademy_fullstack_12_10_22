// Створити форму яка отримує 2 значення ширину і висоту. Також є чекбокс еліпс. Якщо всі данні введено і чекбокс 
// чекнутий, розблоковується кнопка малювати і малюється еліпс, якщо чекбокс ненажатий то кнопка також 
// розблоковується і малюється прямокутник за заданими розмірами

let body = document.body;

let Form = document.createElement('form');
let FormWidth = prompt(`Яка довжина форми завдання 1?`, 150);
let FormHeight = prompt(`Яка висота форми завдання 1?`, 30);
Form.setAttribute('style', `width: ${FormWidth}px; height:${FormHeight}px;`);
Form.addEventListener('submit', function (e) {
    e.preventDefault()
});

let Input = document.createElement('input');
Input.setAttribute('type', 'checkbox');

let flag = false;
Input.onchange = function () {
    flag = Input.checked;
    console.log(`flag = ${flag}`);
};

let Label = document.createElement('label');
Label.textContent = 'Еліпс';

let button = document.createElement('button');
button.textContent = 'Намалювати Еліпс';

let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('style', 'width: 500px; height: 200px; margin-top: 20px;');

// ------Додавання елементів в HTML-----
Form.appendChild(Input);
Form.appendChild(Label);
Form.appendChild(button);

body.appendChild(Form);
body.appendChild(svg);

// -----Малювання------------------------
button.addEventListener('click', function (e) {
    if (flag) {
        let ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipse.setAttribute('cx', '300');
        ellipse.setAttribute('cy', '100');
        ellipse.setAttribute('rx', '100');
        ellipse.setAttribute('ry', '50');
        ellipse.setAttribute('style', 'fill: yellow; stroke: red;');

        // svg.removeChild(rect);
        svg.appendChild(ellipse);
    }
    else {
        let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', '300');
        rect.setAttribute('height', '100');
        rect.setAttribute('style', 'fill: black; stroke: red;');

        // svg.removeChild(ellipse);
        svg.appendChild(rect);
    }
});


// Cтворити інпут куди водиться значення і кнопку . Після введення значення ( цифрового ) і натискання на кнопку
// малються кола за допомогою svg. При натисканні на намальованне коло воно повино видалятись.

let Form2 = document.createElement('form');
Form2.setAttribute('style', `width: 3000px; height:50px; margin: 50px auto;`);
Form2.addEventListener('submit', function (e) {
    e.preventDefault()
});

let Input2 = document.createElement('input');
Input2.setAttribute('type', 'number');
let Radius = 0;

// console.log(Input2);
// console.log(Radius);

let Label2 = document.createElement('label');
Label2.textContent = 'Введіть радіус кола';

let button2 = document.createElement('button');
button2.textContent = 'Намалювати коло';

let svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg2.setAttribute('style', 'width: 500px; height: 200px; margin-top: 20px;');

// ------Додавання елементів в HTML-----
Form2.appendChild(Label2);
Form2.appendChild(Input2);
Form2.appendChild(button2);

body.appendChild(Form2);
body.appendChild(svg2);

// ---Малювання---

let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

button2.addEventListener('click', function (e) {
    Radius = Input2.value;
    // console.log(Radius);

    circle.setAttribute('style', 'fill: red; stroke: blue;');
    circle.setAttribute('cx', '300');
    circle.setAttribute('cy', '100');
    circle.setAttribute('r', `${Radius}`);

    svg2.appendChild(circle);
    return;
});

// ---Видаляння кола при натисканні------------

svg2.addEventListener('click', function (e) {
    svg2.removeChild(circle);
});

// Створити функцію яка малює коло в канвасі і розміщує в середині кола текст

let canvas = document.createElement('canvas');
canvas.setAttribute('height', '300');
canvas.setAttribute('width', '300');
canvas.setAttribute('style', 'display: block; border: 1px solid red; margin-top: 30px;');

body.appendChild(canvas);

let paint = function(){

    let context = canvas.getContext("2d");

    context.beginPath();
    context.arc(150, 150, 75, 0, Math.PI * 2, true);
    context.stroke();

    context.font = "15px serif";
    context.fillText("Hello from JS", 100, 150);
};

paint();

// ***Додадткове завдання, створити функцію яка отримує массив данних, колір. І виводить графік на канвасі

let canvas2 = document.createElement('canvas');
canvas2.setAttribute('height', '300');
canvas2.setAttribute('width', '300');
canvas2.setAttribute('style', 'display: block; border: 1px solid green; margin-top: 30px;');

body.appendChild(canvas2);
// -------------------------------
let x = [10, 20, 30, 50];
let y = [30, 50, 160, 20];

let maxY = 0;
let maxX = 0;

let Graph = function (x, y) {
    // maxY = Math.max(...y);
    // maxX = Math.max(...x);

    // console.log(`max Y = ${maxY}`);
    // console.log(`max X = ${maxX}`);

    let ctx = canvas2.getContext("2d");

    ctx.lineWidth = 5; // товщина лінії координат
    
    ctx.moveTo(5, 295); //початок координат
    ctx.lineTo(5, 5); //вісь Y
    
    ctx.moveTo(5, 295); //початок координат
    ctx.lineTo(295, 295); //вісь X

//  ---Треба зробити цикл на випадок різної довжини масиву--   

    ctx.lineWidth = 2; // товщина лінії графіку  

    ctx.moveTo(`${x[0]}`, `${295 - y[0]}`); // 1 точка 
    ctx.lineTo(`${x[1]}`, `${295 - y[1]}`); // 1 лінія
    
    ctx.moveTo(`${x[1]}`, `${295 - y[1]}`); // 2 точка 
    ctx.lineTo(`${x[2]}`, `${295 - y[2]}`); // 2 лінія

    ctx.moveTo(`${x[2]}`, `${295 - y[2]}`); // 3 точка 
    ctx.lineTo(`${x[3]}`, `${295 - y[3]}`); // 3 лінія

    ctx.moveTo(`${x[3]}`, `${295 - y[3]}`); // 3 точка 
    ctx.lineTo(`${x[4]}`, `${295 - y[4]}`); // 3 лінія

    ctx.stroke();

};

Graph(x, y);
