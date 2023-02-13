// 2) Використовуючи компоненти бутстрапа створити форму замовлення піци. Всі дані що будуть 
// на сторінці (розмір піцци, топінги тримати в js і заповнювати їми компоненти форми)
// Форма має мати такі елементи і рахувати вартість замовлення, при зміні умов перераховувати ціну.
// 1) Селект по вибору розміру (мала, середня, велика )
// 2) Тип начиники (з мясом, сиром і т.д ) кожна начинка різна ціна
// 3) Додаткові топінги (гриби, сир, ковбаски ... ) реаліувати чекбокасами кожен вибраний чекбок +10 грн до ціни
// 4) Достаквка чи самовивіх ( доставка +30 до ціни самовивіз 0)
// 5) Поле де відображається ціна.
// 6) Кнопка замовити (якщо всі поля крім топінгів заповнені то вона активна )
// 7) Після натискання кнопки спливає вікно (модалка або якийсь компонент з бутстрапа з написом 
// "Дякуємо за замовлення") на 5 секунд і зникає

let body = document.body;
body.setAttribute('style', 'margin: 5% auto;');

let FormWidth = document.querySelector('form');
FormWidth.setAttribute('style', 'width:500px; margin: 0 auto;');

// ---Розміри піцци---
let sizeSelect = document.querySelector('.pizzasize');

let Size1 = document.querySelector('.Size-1');
Size1.textContent = 'Мала';

let Size2 = document.querySelector('.Size-2');
Size2.textContent = 'Середня';

let Size3 = document.querySelector('.Size-3');
Size3.textContent = 'Велика';

// ---Тип начинки----
let typeSelect = document.querySelector('.pizzatype');

let ingrid1 = document.querySelector('.topping1');
ingrid1.textContent = 'Сир';

let ingrid2 = document.querySelector('.topping2');
ingrid2.textContent = 'Ковбаска';

let ingrid3 = document.querySelector('.topping3');
ingrid3.textContent = 'Якась зелена трава';

// ----------
// ---Ціна---
// ----------
// -По розміру-
let Little = 100;
let Medium = 120;
let Large = 150;
// -по типу-
let op1 = 50;
let op2 = 60;
let op3 = 70;
// -добавка-
let check = 10;
// -доставка-
let deliv = 30;

let Summ = 0;

let price = document.querySelector('.price');
price.textContent = `0 грн`;


// ----Нема активного розміру---

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value != 1 ||
        e.target.value != 2 ||
        e.target.value != 3) {
        Summ = 0;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ----Є активний розмір але нема типу начинки---

typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 0 && sizeSelect.value !== 0) {
        Summ = 0;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value !== 0 && typeSelect.value == 0) {
        Summ = 0;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---Для малого розміру варіації типу-----------------

// ---малий варіант із сиром на два селекта----
typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 1 && sizeSelect.value == 1) {
        Summ = Little + op1;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 1 && typeSelect.value == 1) {
        Summ = Little + op1;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---малий варіант із ковбаскою на два селекта----

typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 2 && sizeSelect.value == 1) {
        Summ = Little + op2;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 1 && typeSelect.value == 2) {
        Summ = Little + op2;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---малий варіант із травою на два селекта----

typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 3 && sizeSelect.value == 1) {
        Summ = Little + op3;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 1 && typeSelect.value == 3) {
        Summ = Little + op3;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---Для середнього розміру варіації типу-----------------

// ---середній варіант із сиром на два селекта----
typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 1 && sizeSelect.value == 2) {
        Summ = Medium + op1;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 2 && typeSelect.value == 1) {
        Summ = Medium + op1;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---середній варіант із ковбаскою на два селекта----

typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 2 && sizeSelect.value == 2) {
        Summ = Medium + op2;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 2 && typeSelect.value == 2) {
        Summ = Medium + op2;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---середній варіант із травою на два селекта----

typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 3 && sizeSelect.value == 2) {
        Summ = Medium + op3;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 2 && typeSelect.value == 3) {
        Summ = Medium + op3;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---Для великого розміру варіації типу-----------------

// ---великий варіант із сиром на два селекта----
typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 1 && sizeSelect.value == 3) {
        Summ = Large + op1;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 3 && typeSelect.value == 1) {
        Summ = Large + op1;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---великий варіант із ковбаскою на два селекта----

typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 2 && sizeSelect.value == 3) {
        Summ = Large + op2;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 3 && typeSelect.value == 2) {
        Summ = Large + op2;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---великий варіант із зеленню на два селекта----

typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 3 && sizeSelect.value == 3) {
        Summ = Large + op3;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

sizeSelect.addEventListener('change', function (e) {
    if (e.target.value == 3 && typeSelect.value == 3) {
        Summ = Large + op3;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// -----Добавка----
let Mashrooms = document.querySelector('#Grib');
let Cheese = document.querySelector('#Cheese');
let Sosige = document.querySelector('#Sosige');


Mashrooms.addEventListener('change', function(e){
    if (e.target.checked) {
        Summ = Summ + check;
        price.innerHTML = `${Summ} грн`;
    } else {
        Summ = Summ - check;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

Cheese.addEventListener('change', function(e){
    if (e.target.checked) {
        Summ = Summ + check;
        price.innerHTML = `${Summ} грн`;
    } else {
        Summ = Summ - check;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

Sosige.addEventListener('change', function(e){
    if (e.target.checked) {
        Summ = Summ + check;
        price.innerHTML = `${Summ} грн`;
    } else {
        Summ = Summ - check;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ---Доставка---
let Delivery = document.querySelector("#Delivery");
let Sam = document.querySelector("#SAM");

Delivery.addEventListener("change", function (e) {
    if (this.checked) {
        Summ = Summ + deliv;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

Sam.addEventListener("change", function (e) {
    if (this.checked) {
        Summ = Summ - deliv;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// ----модальне вікно----
let button = document.querySelector('.buy');

let modal = document.querySelector('.modal');
modal.setAttribute('style', 'display: none;');

let close = document.querySelector('.btn-close');
close.addEventListener("click", function () {
    modal.setAttribute('style', 'display: none;');
});

button.addEventListener("click", function () {
    modal.setAttribute('style', 'display: block;');
});

