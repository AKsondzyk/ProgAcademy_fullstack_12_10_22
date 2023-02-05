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

// ---Ціна---
let price = document.querySelector('.price');

// -По розміру-
let Little = 100;
let Mediun = 120;
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

// ---Вибір по розміру-------
sizeSelect.addEventListener('change', function (e) {
    if (e.target.value != 1 ||
        e.target.value != 2 ||
        e.target.value != 3) {
        Summ = 0
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 1) {
        Summ = 0
        Summ = Summ + Little;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 2) {
        Summ = 0
        Summ = Summ + Mediun;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 3) {
        Summ = 0
        Summ = Summ + Large;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});
// console.log(Summ);

// ---Вибір по типу-------
typeSelect.addEventListener('change', function (e) {
    if (e.target.value == 1) {
        Summ = 0
        Summ = Summ + op1;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 2) {
        Summ = 0
        Summ = Summ + op2;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 3) {
        Summ = 0
        Summ = Summ + op3;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});

// // ---Вибір по розміру + по типу-------

typeSelect.addEventListener("change", function (e) {
    // --комбо для сиру--
    if (e.target.value == 1 && sizeSelect.value == 1) {
        Summ = 0
        Summ = Summ + op1 + Little;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 1 && sizeSelect.value == 2) {
        Summ = 0
        Summ = Summ + op1 + Mediun;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 1 && sizeSelect.value == 3) {
        Summ = 0
        Summ = Summ + op1 + Large;
        price.innerHTML = `${Summ} грн`;
    }
    // --комбо для ковбаски--
    if (e.target.value == 2 && sizeSelect.value == 1) {
        Summ = 0
        Summ = Summ + op2 + Little;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 2 && sizeSelect.value == 2) {
        Summ = 0
        Summ = Summ + op2 + Mediun;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 2 && sizeSelect.value == 3) {
        Summ = 0
        Summ = Summ + op2 + Large;
        price.innerHTML = `${Summ} грн`;
    }
    // --комбо для трави--
    if (e.target.value == 3 && sizeSelect.value == 1) {
        Summ = 0
        Summ = Summ + op3 + Little;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 3 && sizeSelect.value == 2) {
        Summ = 0
        Summ = Summ + op3 + Mediun;
        price.innerHTML = `${Summ} грн`;
    }

    if (e.target.value == 3 && sizeSelect.value == 3) {
        Summ = 0
        Summ = Summ + op3 + Large;
        price.innerHTML = `${Summ} грн`;
    }
    return;
});
// console.log(Summ);

// -----Добавка----
let Mashrooms = document.querySelectorAll('#Grib');
let Cheese = document.querySelectorAll('#Cheese');
let Sosige = document.querySelectorAll('#Sosige');


// Mashrooms.addEventListener('change', function(){
//     if (this.checked) {
//         Summ = Summ + check;
//         price.innerHTML = `${Summ} грн`;
//     } else {
//         Summ = Summ - check;
//         price.innerHTML = `${Summ} грн`;
//     }
//     return;
// });

// Cheese.addEventListener('change', function(){
//     if (this.checked) {
//         Summ = Summ + check;
//         price.innerHTML = `${Summ} грн`;
//     } else {
//         Summ = Summ - check;
//         price.innerHTML = `${Summ} грн`;
//     }
//     return;
// });

// Sosige.addEventListener('change', function(){
//     if (this.checked) {
//         Summ = Summ + check;
//         price.innerHTML = `${Summ} грн`;
//     } else {
//         Summ = Summ - check;
//         price.innerHTML = `${Summ} грн`;
//     }
//     return;
// });

// ---Доставка---
  let Delivery = document.querySelector("#Delivery");

  Delivery.addEventListener("change", function (e) {
    if (this.checked) {
        Summ = Summ + deliv;
        price.innerHTML = `${Summ} грн`;
    }
    else{
        Summ = Summ - deliv;
        price.innerHTML = `${Summ} грн`; 
    }
    return;
  });

// ----модальне вікно----
let button = document.querySelector('.buy');

let modal = document.querySelector('.modal');
modal.setAttribute('style', 'display: none;');

button.addEventListener("click", function () {
      modal.setAttribute('style', 'display: block;');
  });