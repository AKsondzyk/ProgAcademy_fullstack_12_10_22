// 1) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
// CountLowrercase("abc"); ===> 0
// CountLowrercase("abcABC123"); ===> 3
// CountLowrercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

let body = document.body;

let NewForm1 = document.createElement('form');

let NewTextArea1 = document.createElement('input');
NewTextArea1.setAttribute('type', 'text');
NewTextArea1.setAttribute('style', 'width: 60%; margin: 10px auto;');
NewTextArea1.setAttribute('placeholder', 'Введіть текст завдання 1 отримайте рузультат в консолі');

NewForm1.appendChild(NewTextArea1);
body.appendChild(NewForm1);

// -------

NewTextArea1.addEventListener('change', function (e) {
    let text = this.value;
    let paternUpp = /[A-Z]/g;
    let ResTaskOne = text.match(paternUpp);
    // console.log(ResTaskOne);

    console.log(`Кількість великих літер у 1 завданні = ${ResTaskOne.length}`);
    return;
});

// 2) Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення 
// переводить в тип намбер та повертає його
// fclearString("hell5o wor6ld") ======> 56

let NewForm2 = document.createElement('form');

let NewTextArea2 = document.createElement('input');
NewTextArea2.setAttribute('type', 'text');
NewTextArea2.setAttribute('style', 'width: 60%; margin: 10px auto;');
NewTextArea2.setAttribute('placeholder', 'Введіть текст завдання 2');

NewForm2.appendChild(NewTextArea2);
body.appendChild(NewForm2);

// -------

NewTextArea2.addEventListener('change', function (e) {
    let text = this.value;
    let paternNum = /\d/g;

    let ResTaskTwo = text.match(paternNum);
    console.log(`Масив стрінгів 2 завдання = ${ResTaskTwo}`);

    let FullNumber = +ResTaskTwo.join('');  // тут з'єднуємо всі стрінги (цифри в одне число)

    this.value = Number(FullNumber);        // тут переводимо стрінги в числове
    
    console.log(typeof(this.value));        // результат однаково string. Чому ???
    return;
});

// 3) Створити інпут який отримує пін код(це 4 цифрових значення).За допомогою регулярки 
// перевітити чи валідний пін код ввів користувач
// "1234"   -- > true
// "12345"  -- > false
// "a234"   -- > false


let NewForm3 = document.createElement('form');

let NewTextArea3 = document.createElement('input');
NewTextArea3.setAttribute('type', 'text');
NewTextArea3.setAttribute('style', 'width: 60%; margin: 10px auto;');
NewTextArea3.setAttribute('placeholder', 'Введіть пін-код з 4 значень завдання 3');

NewForm3.appendChild(NewTextArea3);
body.appendChild(NewForm3);

// -------

NewTextArea3.addEventListener('change', function (e) {
    let pin = this.value;
    // console.log(pin);
    let paternPIN = /\d\d\d\d/;

    let CheckPatern = paternPIN.test(pin);
    // console.log(CheckPatern);

    let CheckLenght = pin.match(/\d/g);
    // console.log(CheckLenght);


    if (CheckPatern == true && CheckLenght.length == 4){
        this.value = 'Створено успішно';
        // console.log('Створено успішно');
    }
    else{
        this.value = 'Пін код не відповідає вимогам';
        // console.log('Пін код не відповідає вимогам');
    }
    return;
});

// 4) Створити регулярку яка отримує адресс сторінки і повертає тільки адрес
// "https://prog.academy/?page=1" -- > "https://prog.academy/"

let site = 'https://prog.academy/?page=1';
let paternSite = /\w{5}\:\S{2}\S+\//;

let ResultTaskFour = '';

function showSite(e) {
    let ArrSite = e.match(paternSite)
    // console.log(`Масив 4 завдання = ${ArrSite}`);

    for (let i = 0; i < ArrSite.length; i++) {
        ResultTaskFour += ArrSite[i];
        console.log(ResultTaskFour);
    }
    return;
};

showSite(site);

// 5) Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, 
// довжина імя повина бути від 4 до 10 символів.Приклад: 
// validateUsr('a') => false,
// validateUsr('p1pp1') => true, 
// validateUsr('asd43_34') => true

let NewForm5 = document.createElement('form');

let NewTextArea5 = document.createElement('input');
NewTextArea5.setAttribute('type', 'text');
NewTextArea5.setAttribute('style', 'width: 60%; margin: 10px auto;');
NewTextArea5.setAttribute('placeholder', 'Введіть текст завдання 5 отримайте рузультат в консолі');

NewForm5.appendChild(NewTextArea5);
body.appendChild(NewForm5);

// -------

NewTextArea5.addEventListener('change', function (e) {
    let UserNAme = this.value;
    let paternUpp = /\b[a-z_0-9-]{4,10}\b/ig;
    let ResTaskFive = paternUpp.test(UserNAme);
    console.log(`Чи пройдено тест завдання 5 - ${ResTaskFive}`);
    return;
});
