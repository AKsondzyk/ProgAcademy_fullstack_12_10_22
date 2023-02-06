// 1) Створити форму як на малюнку, за допомогою js реалізувати перевірку чи співпадають паролі. 
// Чи введені всі дані в полях.
// Якщо всі данні введені, сховати поля і кнопки і вивести текст, реєсстрація пройшла успішно, 
// в полях де помилка змінити колір бордера на червоний

let body = document.body;
body.setAttribute('style', 'display: flex; justify-content: center; background-color: black;')

// --створення елементів та групування по div а також стилізація---

let createH1 = document.createElement('h1');
createH1.innerText = 'Register';
createH1.setAttribute('style','color: white; text-align: center;')

let createFNameDiv = document.createElement('div');
let craeteInputFirstName = document.createElement('input');
createFNameDiv.appendChild(craeteInputFirstName);
craeteInputFirstName.setAttribute('type', 'text');
craeteInputFirstName.setAttribute('placeholder', 'Full Name');

let createEmailtDiv = document.createElement('div');
let craeteInputEmail = document.createElement('input');
createEmailtDiv.appendChild(craeteInputEmail);
craeteInputEmail.setAttribute('type', 'email');
craeteInputEmail.setAttribute('placeholder', 'E-mail');

let createPhoneDiv = document.createElement('div');
let craeteInputPhone = document.createElement('input');
createPhoneDiv.appendChild(craeteInputPhone);
craeteInputPhone.setAttribute('type', 'tel');
craeteInputPhone.setAttribute('placeholder', 'Phone');
// craeteInputPhone.setAttribute('pattern','[0-9]{3}-[0-9]{3}-[0-9]{4}');

let createPasswordDiv = document.createElement('div');
let craeteInputPassword = document.createElement('input');
createPasswordDiv.appendChild(craeteInputPassword);
craeteInputPassword.setAttribute('type', 'password');
craeteInputPassword.setAttribute('placeholder', 'Password');

let createConfPasswordDiv = document.createElement('div');
let craeteInputConfPassword = document.createElement('input');
createConfPasswordDiv.appendChild(craeteInputConfPassword);
craeteInputConfPassword.setAttribute('type', 'password');
craeteInputConfPassword.setAttribute('placeholder', 'Confrim Password');

let createSubButtonDiv = document.createElement('div');
let SubButton = document.createElement('button');
createSubButtonDiv.appendChild(SubButton);
createSubButtonDiv.setAttribute('style', 'margin-top: 40px;');
SubButton.innerText = 'Register';

let createSingButtonDiv = document.createElement('div');
let SingButton = document.createElement('button');
createSingButtonDiv.appendChild(SingButton);
SingButton.innerText = 'Have account? Sing In';

// ----додавання елементів в Form----

let createForm = document.createElement('form');

createForm.appendChild(createH1);
createForm.appendChild(createFNameDiv);
createForm.appendChild(createEmailtDiv);
createForm.appendChild(createPhoneDiv);
createForm.appendChild(createPasswordDiv);
createForm.appendChild(createConfPasswordDiv);
createForm.appendChild(createSubButtonDiv);
createForm.appendChild(createSingButtonDiv);

// ----додавання Form в HTML----

body.appendChild(createForm);

// --------стилізація Input--------------------

let AllInput = document.querySelectorAll('input');
console.log(AllInput);

AllInput.forEach((item) => {
    item.setAttribute('style',
    'width: 200px; height: 20px; border: 4px solid #8F00FF; border-radius: 10px; margin-top: 2rem; background-color: black; color: white;');
})

// --------стилізація Button--------------------

let AllButton = document.querySelectorAll('button');
console.log(AllButton);

AllButton.forEach((item) => {
    item.setAttribute('style',
    'width: 200px; height: 30px; border: 4px solid #8F00FF; border-radius: 15px; margin-top: 1rem; background-color: blue; color: white;');
})

// -------------Функції на кнопку REGISTER-----------
// SubButton.onclick = function(e){
//     e.preventDefault();
// };

SubButton.addEventListener('click', function () {

    // -------Перевірка паролів-------------------
    if (craeteInputPassword.value !== craeteInputConfPassword.value) {
        craeteInputPassword.setAttribute('style',
            'width: 200px; height: 20px; border: 4px solid red; border-radius: 10px; margin-top: 2rem; background-color: black; color: white;');

        craeteInputConfPassword.setAttribute('style',
            'width: 200px; height: 20px; border: 4px solid red; border-radius: 10px; margin-top: 2rem; background-color: black; color: white;');

        alert('Введені паролі не співпадають');
        return;
    }

    // -------Перевірка заповнення рядків форми-------------------

    AllInput.forEach((item) => {
        if (item.value == 0) {
            item.setAttribute('style',
                'width: 200px; height: 20px; border: 4px solid red; border-radius: 10px; margin-top: 2rem; background-color: black; color: white;');
        }
    })


    // -------Якщо всі умови виконано -------------------
    if (
        createFNameDiv.value > 0 &&
        createEmailtDiv.value > 0 &&
        createPhoneDiv.value > 0 &&
        createPasswordDiv.value > 0 &&
        createConfPasswordDiv.value > 0
    ) {

        createForm.setAttribute('style', 'display: none;');

        let Congrat = document.createElement('h2');
        Congrat.innerText = 'Реєстрація пройшла успішно';
        Congrat.setAttribute('style', 'color: white; text-align: center; font-size: 3rem;');

        body.appendChild(Congrat);
    }

    return;
});