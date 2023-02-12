// Створити форму яка отримує 2 значення ширину і висоту. Також є чекбокс еліпс. Якщо всі данні введено і чекбокс 
// чекнутий, розблоковується кнопка малювати і малюється еліпс, якщо чекбокс ненажатий то кнопка також 
// розблоковується і малюється прямокутник за заданими розмірами

let body = document.body;

let Form = document.createElement('form');
let Input = document.createElement('input');
Input.setAttribute('type', 'checkbox');
let Label = document.createElement('label');
Label.textContent = 'Еліпс';
let button = document.createElement('button');
button.textContent = 'Намалювати Еліпс';
button.disabled = true;

let FormWidth = prompt(`Яка довжина форми завдання 1?`, 150);
let FormHeight = prompt(`Яка висота форми завдання 1?`, 30);

Form.setAttribute('style', `width: ${FormWidth}px; height:${FormHeight}px;`);

Form.appendChild(Input);
Form.appendChild(Label);
Form.appendChild(button);

body.appendChild(Form);



Label.addEventListener('check', function(){
    console.log(Label);
    button.disabled = false;
    return;
});



// Cтворити інпут куди водиться значення і кнопку . Після введення значення ( цифрового ) і натискання на кнопку
// малються кола за допомогою svg. При натисканні на намальованне коло воно повино видалятись.





// Створити функцію яка малює коло в канвасі і розміщує в середині кола текст 


// ***Додадткове завдання, створити функцію яка отримує массив данних, колір. І виводить графік на канвасі