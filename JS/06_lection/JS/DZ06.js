// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і
// повертає результат обчислень
// ----------------------------------------------------------------------------------------

function Suma(){
    let SumaTaskOne = 0;
    for(let i=0; i < arguments.length; i++){
        SumaTaskOne += arguments[i]; 
    }
    return console.log(`Сума всіх введених чисел = ${SumaTaskOne}`);
}

// -------Перевірка завдання №1--------

Suma(4, 1, 2);

// ----------------------------------------------------------------------------------------
// 2) Створити функцію яка отримує від користувача день народження,місяць, рік і повертає 
// вік користувача і якщо сьогодні день народження користувача то вивести привітання.
// ----------------------------------------------------------------------------------------

let NowTime = new Date();

function birthdayDate(DD, MM, YYYY) {
    if (arguments[1] - NowTime.getMonth() > 0) {
        let FullYears = NowTime.getFullYear() - arguments[2] - 1;
        console.log(`Вам повних ${FullYears} років`);
    }
    else if((arguments[0] - NowTime.getDate() == 0) && (arguments[1] - NowTime.getMonth() == 0)) {   
        console.log(`Happy Birthday!!!`);
    }
    else{
        let FullYears = NowTime.getFullYear() - arguments[2];
        console.log(`Вам повних ${FullYears} років`);
    }
    return;
}

// -----перевірка завдання №2---!!! не забуваємо що місяці рахує з 00 по 11 !!!------------------

console.log(`---виклик функції завдання №2---`);
birthdayDate(09, 00, 1994);

// ----------------------------------------------------------------------------------------
// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна 
// як колбек, і в разі дня народження буде вітати користувача
// ----------------------------------------------------------------------------------------

console.log(`-----Під цим рядком поховано виклик моєї callback функції завдання №3-------`);

function CbFnHappyBthd(){
    return console.log(`Виклик спрацював, далі довге привітання з усіма побажаннями`);
}

function birthdayDateWithCallback(DD, MM, YYYY, Callback) {
    if (arguments[1] - NowTime.getMonth() > 0) {
        let FullYears = NowTime.getFullYear() - arguments[2] - 1;
        console.log(`Вам повних ${FullYears} років`);
    }
    else if((arguments[0] - NowTime.getDate() == 0) && (arguments[1] - NowTime.getMonth() == 0)) {   
        Callback();
    }
    else{
        let FullYears = NowTime.getFullYear() - arguments[2];
        console.log(`Вам повних ${FullYears} років`);
    }
    return;
}

birthdayDateWithCallback(09, 00, 2020, CbFnHappyBthd);

// ----------------------------------------------------------------------------------------
// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер 
// сторіччя. Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20
// ----------------------------------------------------------------------------------------

let ResultFunctionFour = 0;

function TaskFour(yaer){
    if (TaskFour.arguments[0] % 100 == 0 ){
        ResultFunctionFour = TaskFour.arguments[0] / 100;
    }
    else{
        ResultFunctionFour = Math.floor(TaskFour.arguments[0] / 100) + 1;
    }

    return  ResultFunctionFour;
}

let resultTaskFour1810 = TaskFour(1810);
let resultTaskFour1700 = TaskFour(1700);
let resultTaskFour1601 = TaskFour(1601);
let resultTaskFour2000 = TaskFour(2000);

console.log(`Номер сторіччя для 1810 року = ${resultTaskFour1810}`);
console.log(`Номер сторіччя для 1700 року = ${resultTaskFour1700}`);
console.log(`Номер сторіччя для 1601 року = ${resultTaskFour1601}`);
console.log(`Номер сторіччя для 2000 року = ${resultTaskFour2000}`);

// ----------------------------------------------------------------------------------------
// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в
//  наступному ( В цьому місяці 30 днів в наступному 31 ).
// ----------------------------------------------------------------------------------------
// let monthTaskFive = prompt(`введіть номер місяця від 1 до 12`, 1); 

// function daysInMonth(a) {
//     a = a - 1;
//     switch (a) {
//         case 0:
//         case 2:
//         case 4:
//         case 6:
//         case 8:
//         case 10:
//             return 30;
//             break;
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 9:
//         case 11:
//             return 31;
//             break;
//     }
// }

// let ResultTaskFive = daysInMonth(monthTaskFive);
// let NextAfterResult = 0;

// if (ResultTaskFive == 31) {
//     NextAfterResult = 30;
// }
// else{
//     NextAfterResult = 31; 
// }

// console.log(`В цьому місяці ${ResultTaskFive} днів в наступному ${NextAfterResult}, бо так сказано у завданні хоча має бути не так`);

//----------Варіант №2 з правильною кількістю-днів----- 

let monthTaskFive = parseInt(prompt(`введіть номер місяця від 1 до 12`, 1));
let yearTaskFive =  parseInt(prompt(`введіть рік`, 2023));


function daysInMonth(MM, YYYY){
    let CurrentMonth = new Date(YYYY, MM, 0).getDate();
    let NextMonth = new Date(YYYY, MM + 1, 0).getDate();
    console.log(`У цьому місяці ${CurrentMonth} днів, у наступному місяці ${NextMonth} днів`)
    return;
}

daysInMonth(monthTaskFive, yearTaskFive);