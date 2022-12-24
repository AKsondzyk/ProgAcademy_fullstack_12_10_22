// 1) Створити функцію яка отримує массив і вибирає з нього всі 
// парні числа і розміщує в новому масиві. Функція повина 
// повертати массив з парними номерами.
// ----------------------------------------------------------------

let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];
let FirstArr = [];

function NewArrayWithResult() {
    for (i = 0; i < arrRandomNumbers.length; i++) {
        let Result = arrRandomNumbers[i];
        if (Result % 2 == 0) {
            FirstArr.push(Result);
        }
    }
    console.log(`Новий масив завдання 1 з парними значеннями: ${FirstArr}`);
}

NewArrayWithResult();

// ----------------------------------------------------------------
// 2) Створити цикл який 5 разів виводить prompt  запитує що купити
// і вводить це в массив.
// ----------------------------------------------------------------

let ResultArray = [];

for (let i = 0; i < 5; i++) {
    let Item = prompt(`Що купити ?`);
    ResultArray.push(Item);
}
console.log(`Перелік того що купити завдання 2: ${ResultArray}`);

// ----------------------------------------------------------------
// 3) Створити функцію яка отримує як аргумент массив і вираховує 
// середнє значення всіх чисел. ( при розрахунках вважайте що 
// массив може бути будьякої довжини переданий)
// ----------------------------------------------------------------

let ArrayLenght = parseInt(prompt('Яка довжина масива завдання 3 ?', 1));
let MyArray = [];

for (let x = 0; x < ArrayLenght; x++) {
    let ArrayNumber = parseFloat(prompt(`Введіть числа масива завдання 3`));
    MyArray.push(ArrayNumber);
}
console.log(`Ваш введений масив завдання 3: ${MyArray}`);

function AverageValue() {
    let StartAverage = 0;
    if (MyArray.length >= 1) {
        for (let i = 0; i < MyArray.length; i++) {
            StartAverage += MyArray[i];
        }
    }
    else {
        alert('Ви не ввели довільний масив завдання 3');
    }
    return StartAverage / MyArray.length;
}

let AverageResult = AverageValue();
console.log(`Середнє значення введеного масиву завдання 3: ${AverageResult}`);

// ----------------------------------------------------------------
// 4) Створити функцію яка замінює в массиві =) на ;)
// ----------------------------------------------------------------

let smile = [':)', '=)', ':)', '=)', ':)', '=)'];

function SmileChange() {
    for (let i = 0; i < smile.length; i++) {
        if (smile[i] == "=)") {
            smile[i] = ";)";
        }
    }
    return smile;
}

console.log(SmileChange());

// ----------------------------------------------------------------
// 5) створити функцію яка отримує аргумент, якщо це 'last' то 
// функція створює массив поміщає в нього останній елемент массиву  
// і видаляє останній елемент  массиву animals, якщо аргумент 
// 'first' то також записує перший елемент массиву до нового 
// массиву і видаляє перший елемент з animals
// ----------------------------------------------------------------

let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let NewAnimalsArray = [];
let Word = prompt(`Введіть аргумент "last", або "first"`);

function TaskFiveFunction() {
    if (Word == "last") {
        NewAnimalsArray.push(animals.lastIndexOf());
        animals.pop();
    } else if (Word == "first") {
        NewAnimalsArray.push(animals[0]);
        animals.shift();
    }
    return NewAnimalsArray;
}
TaskFiveFunction();

console.log(animals);

// ----------------------------------------------------------------
// 6) Напишіть функцію яка отримує массив і повертає сумму всіх 
// значень массиву
// ----------------------------------------------------------------

let ArrayLenghtPartSix = parseInt(prompt('Яка довжина масива завдання 6?', 1));
let MyArrayTaskSix = [];

for (let x = 0; x < ArrayLenghtPartSix; x++) {
    let ArrayNumberPartSix = parseFloat(prompt(`Введіть числа масива завдання 6`));
    MyArrayTaskSix.push(ArrayNumberPartSix);
}
console.log(`Ваш введений масив завдання 6: ${MyArrayTaskSix}`);

function SumaValue() {
    let StartSuma = 0;
    if (MyArrayTaskSix.length >= 1) {
        for (let i = 0; i < MyArrayTaskSix.length; i++) {
            StartSuma += MyArrayTaskSix[i];
        }
    }
    else {
        alert('Ви не ввели довільний масив завдання 6');
    }
    return StartSuma;
}

let SumaResult = SumaValue();
console.log(`Cума значень введеного масиву завдання 6: ${SumaResult}`);


// ----------------------------------------------------------------
// 7)Створити функцію яка отримує в аргумент старт значення і фініш 
// значення ( старт менше фініша) також отрмує массив задовільної 
// довжини. Функція повина повертати массив в якому вирізанні 
// значення з старт індекса по фініш
// ----------------------------------------------------------------

let ArrayLenghtPartSeven = parseInt(prompt('Яка довжина масива між початковим і кінцевим значеннями завдання 7 ?', 1));
let StartValue = parseFloat(prompt(`Введіть початкове значення`));                 
let EndValue = parseFloat(prompt(`Введіть кінцеве значення більше початкового`));  


let MyArrayTaskSeven = [StartValue];                              

for (let x = 0; x < ArrayLenghtPartSeven; x++) {
    let ArrayNumberPartSeven = parseFloat(prompt(`Введіть числа масива завдання 7`)); 
    MyArrayTaskSeven.push(ArrayNumberPartSeven);                            
}
MyArrayTaskSeven.push(EndValue);

console.log(`Ваш введений масив завдання 7: ${MyArrayTaskSeven}`);

function TaskSeven() {
    if (StartValue < EndValue) {
        MyArrayTaskSeven = MyArrayTaskSeven.slice(1, ArrayLenghtPartSeven+1); 
    }
    else {
        alert(`У умові завдання 7 щось введено не коректно`);
    }
    return MyArrayTaskSeven;
}

let ResultTaskSeven = TaskSeven();
console.log(`Масив після функції завдання 7: ${ResultTaskSeven}`);


