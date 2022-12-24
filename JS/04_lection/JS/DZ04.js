// 1) Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa)
// які містять числові значення ( збереження юзера). Створити массив обєктів bank в 
// якому є обєкети з ключами buy, sell з числовими значеннями ( продаж і покупка валюти) 
// а також ключ name в який передаємо назву валюти (usa, euro, ua).
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає 
// скільки долларів чи євро може купити користувач, врахувати можливість неможливості 
// покупки. Створити функцію яка прораховує скільки гривень отримує користувач продавши 
// свої збереження
// -----------------------------------------------------------------------------------

let userWallet = {
    amountUsa: 0,
    amountEuro: 0,
    amountUa: 1000,
};
 
let Usa = {
    buy: 40.35,
    sell: 40.7,
    name: "USD",
};

let Euro = {
    buy: 42.16,
    sell: 42.6,
    name: "EUR",
};

let Ua = {
    buy: 0.99999,
    sell: 1.0001,
    name: "UAH",
};

let bank = [Usa, Euro, Ua];

function HowMuch (){
    let SummaUSD = 0;
    let SummaEUR = 0;
    let SummaUA = 0;
    if (userWallet.amountEuro > 0 || userWallet.amountUa > 0 || userWallet.amountUsa>0){

        if(userWallet.amountEuro > 0 ){
            SummaUSD = (userWallet.amountEuro * Euro.buy + userWallet.amountUa) / Usa.sell;
            console.log(`Ви можете конвертнути все у долари, отримаєте ${SummaUSD}`)
            let resultUSD = SummaUSD + userWallet.amountUsa;
            console.log(`Сумарно у Доларах у вас буде ${resultUSD}`);
        }
        else if (userWallet.amountUsa > 0 ){
            SummaEUR = (userWallet.amountUsa * Usa.buy + userWallet.amountUa) / Euro.sell;
            console.log(`Ви можете конвертнути все у євро, отримаєте ${SummaEUR}`)
            let resultEUR = SummaEUR + userWallet.amountEuro;
            console.log(`Сумарно у Євро у вас буде ${resultEUR}`);
        }
        else if (userWallet.amountUa > 0 ){
            SummaEUR = userWallet.amountUa / Euro.sell;
            console.log(`Ви можете конвертнути все у євро, отримаєте ${SummaEUR}`)
            SummaUSD = userWallet.amountUa / Usa.sell;
            console.log(`Ви можете конвертнути все у долари, отримаєте ${SummaUSD}`)
        }
    }

    else{
        alert(`Пробачте у вас недостатньо коштів на гаманці`);
    }
return  [SummaEUR, SummaUA, SummaUSD];
}

let ExOperationTaskOne = HowMuch();
console.log(ExOperationTaskOne);

function VeryBadDay (){
    let FinalConvertEuroToUAH = 0;
    let FinalConvertUsdToUAH = 0;
    let FinalValueHryvna = 0;
    if (userWallet.amountEuro > 0 || userWallet.amountUsa > 0 ){
        FinalConvertEuroToUAH = userWallet.amountEuro * Euro.buy;
        console.log(`Можете продати Євро на суму: ${FinalConvertEuroToUAH}`);
        FinalConvertUsdToUAH = userWallet.amountUsa * Usa.buy;
        console.log(`Можете продати Доларів на суму: ${FinalConvertUsdToUAH}`);

        FinalValueHryvna = FinalConvertEuroToUAH + FinalConvertUsdToUAH + userWallet.amountUa;

        console.log(`Сумарно у вас буде Гривнів: ${FinalValueHryvna}`);
    }
    else{
        console.log(`Більше у запасі валюти немає, але ви тримайтесь і хорошого вам настрою`);
    }
return [FinalConvertEuroToUAH, FinalConvertUsdToUAH, FinalValueHryvna];
}

let BuyOperationTaskOne = VeryBadDay();
console.log(BuyOperationTaskOne);

// -----------------------------------------------------------------------------------
// 2) Створити функцію move яка повертає текст на скільки кроків і куди (отримане 
// значення) змістився користувач. Створити функцію moveUser яка отримує напрямок 
// переміщення, кількість кроків і функцію move як колбек. moveUser ('north', move,
// 10) повина повернути ( Юзер перемістився на північ на 10 кроків)
// -----------------------------------------------------------------------------------

let Direction  = prompt(`Виберіть напрямок (north, west, south, east)`);
let Step = prompt(`На скільки кроків перемістились?`, 10);


function move(Direction, Step) {
    let side = "";
    switch (Direction) {
      case "north":
        side = "Північ";
        break;
      case "west":
        side = "Захід";
        break;
      case "south":
        side = "Південь";
        break;
      case "east":
        side = "Схід";
        break;
      default:
        side = "екскурсію до воєнного корабля";
    }
    return `Юзер змістився на ${side} на ${Step} кроків`;
  }
  
  function moveUser() {
    return move(Direction, Step);
  }

  console.log(moveUser());

// -----------------------------------------------------------------------------------
// 3) Створіть массив в якому видаляється кожний другий елемент 
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] в результаті повинен 
// бути ось такий новий массив ["Keep", "Keep", "Keep", ...], 
// Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву
// -----------------------------------------------------------------------------------

let ArrayTaskThreeLenght = parseInt(prompt(`Яка довжина масиву завдання 3?`));
let ArrayTaskThree = [];

if (ArrayTaskThreeLenght > 0) {
    for (let i = 0; i < ArrayTaskThreeLenght; i++) {
        if (i % 2 == 0) {
            ArrayTaskThree.push("Keep");            
        }
        else if (i % 2 !== 0) {
            ArrayTaskThree.push("Remove");         
        }  
    }
// !!!---не можу додати цей else (хочу привязати до першого if)---!!!
// else {                                          
//     console.log(`Ви не вказали довжину масиву завдання 3`); 
// }
console.log(`Ваш створений масив ${ArrayTaskThree}`);
}

function DeleteElements() {
    let NewArratTaskThree = [];
      for (let i = 0; i < ArrayTaskThreeLenght; i++) {
        if (i % 2 == 0) {
            NewArratTaskThree.push(ArrayTaskThree[i]);
        }
      }
      return NewArratTaskThree;
}

let ResultTaskThree = DeleteElements();
console.log(`Повернутий після фенкції масив ${ResultTaskThree}`);

// -----------------------------------------------------------------------------------
// 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті
// -----------------------------------------------------------------------------------

let figurs = [
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

// function TaskFour (){
//     let VolumeSquare = 0;
//     let VolumeRec = 0;
//     if (figurs.figure == "Squar"){
//         VolumeSquare = figurs[0].sizeA * figurs.sizeB;

//     }
//     else {
//         VolumeRec = figurs[1].sizeA * figurs.sizeB;
//     }
// return [VolumeSquare, VolumeRec];
// }

// let ResultTaskFour =  TaskFour ();
// console.log(`${ResultTaskFour}`);

// -----------------------------------------------------------------------------------
// 5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує 
// парні значення на 4
// -----------------------------------------------------------------------------------

let ArrayTaskFive = [2,3,5,4,8,7,9,10];
let NewArrTasksFive = [];

for (let i = 0; i < ArrayTaskFive.length; i++) {

    if (ArrayTaskFive[i] % 2 == 0) {
        NewArrTasksFive.push(ArrayTaskFive[i] * 4);
    }
    else{
        NewArrTasksFive.push(ArrayTaskFive[i]);
    }
}
console.log(`Оброблений масив завдання 5: ${NewArrTasksFive}`);

