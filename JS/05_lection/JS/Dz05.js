// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, 
// також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі 
// повиний бути метод виводу інформації про юзера. 
// Метод повинен бути винесений в прототип.
// ------------------------------------------------------------------------------------

function TaskOne(UserName, SecondName, Age) {
    this.UserName = UserName;
    this.SecondName = SecondName;
    this.Age = Age;
    this.id = ((Math.random()) * 10);
    this.info = function () {
        console.log(`This User name is ${this.UserName} his/her age ${this.Age}. Say Hello.`);
    }
}

// -------Перевірка-завдання-№1-----------

const ObjectTaskOne = new TaskOne(`Vanya`, `Bogatyr`, 18);

console.log(ObjectTaskOne);

console.log(ObjectTaskOne.info());

// ------------------------------------------------------------------------------------
// 2) Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити 
// імя, вік користувача. ІD не міняється
// ------------------------------------------------------------------------------------

TaskOne.prototype.update = function (UserName, SecondName, Age) {
    this.UserName = UserName;
    this.SecondName = SecondName;
    this.Age = Age;
    return;
}

// -------Перевірка-завдання-№2-----------

ObjectTaskOne.update(`Genadiy`, `Chybatyu`, 22);
console.log(ObjectTaskOne);

// ------------------------------------------------------------------------------------
// 3) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип 
// винести методи обчислення Площі, переметра, та визначення діагоналі.
// ------------------------------------------------------------------------------------

function TaskThree(a, b) {
    this.a = a;
    this.b = b;
    this.info = function () {
        console.log(`Сторона A = ${this.a} Сторона B = ${this.b}`);
    }
    this.perimeter = function () {
        let PerimetrTaskThree = (this.a + this.b) * 2;
        console.log(`Периметр створеної фігури = ${PerimetrTaskThree}`);
    }
    this.Sqare = function () {
        let SquarTaskThree = (this.a * this.b);
        console.log(`площа створеної фігури = ${SquarTaskThree}`);
    }
    this.diagonal = function () {
        let DiagonalTaskThree = Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
        console.log(`Діагональ створеної фігури = ${DiagonalTaskThree}`);
    }
}

// -------Перевірка-завдання-№3-----------

const ObjectTaskThree = new TaskThree(1, 4);

console.log(ObjectTaskThree);

console.log(ObjectTaskThree.info());
console.log(ObjectTaskThree.perimeter());
console.log(ObjectTaskThree.Sqare());
console.log(ObjectTaskThree.diagonal());

// ------------------------------------------------------------------------------------
// 4) Отримати від користувача значення name вивести в консоль, першу і останню літеру 
// з name у верхньому регістрі.
// ------------------------------------------------------------------------------------

let TaskFourName = prompt(`Введіть значення name завдання 4`);
let FrstToUp = TaskFourName.replace(TaskFourName[0], TaskFourName[0].toUpperCase());
let LastToUpperValue = FrstToUp.slice(0, -1) + FrstToUp[FrstToUp.length - 1].toUpperCase();
console.log(LastToUpperValue);

// ------------------------------------------------------------------------------------
// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, 
// якщо стрінг маж довжину більше 10 то відрізає все після 10 і додає 3 крапки
// ------------------------------------------------------------------------------------

let StringTaskFive = prompt(`Введіть рандомний текст завдання 5`, `   123456789abracadabra   `);

function TaskFive() {

    let TrimFive = StringTaskFive.trim();

    if (TrimFive.length >= 10) {
        return TrimFive.slice(0, 10) + `...`;
    }

    return TrimFive;
}

let TasksFiveResult = TaskFive();
console.log(TasksFiveResult);

