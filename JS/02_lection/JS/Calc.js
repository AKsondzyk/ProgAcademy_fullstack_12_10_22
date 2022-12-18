// - дописати реалізацію  калькулятора розглянутого на уроці за допомогою if і else if при спробі поділити на 0 виводити alert з попередженням.

let FirstNumber = parseFloat(prompt('Введіть перше число для обчислення', 0));
let Operation = prompt('Введіть операцію');
let SecondNumber = parseFloat(prompt('Введіть друге число для обчислення', 0));

// ------------------------Calculator------------------------
if (Operation == '+'){
    let SumaResult = FirstNumber + SecondNumber;
    console.log(`Сумма двох чисел:  ${SumaResult}`);
}
else if ( Operation == '-'){
    let DiffResult = FirstNumber - SecondNumber;
    console.log(`Різниця двох чисел: ${DiffResult}`);
}
else if ( Operation == '*'){
    let MultiplicationResult = FirstNumber * SecondNumber;
    console.log(`Добуток двох чисел: ${MultiplicationResult}`);
}
else if ( Operation == '/' && SecondNumber !=0){
    let DelayResult = FirstNumber / SecondNumber;
    console.log(`Ділення першого числа на друге: ${DelayResult}`);
}
else if ( Operation == '/' && SecondNumber == 0){
    alert(`Поки що на нуль ділити не можна!!!`);
}
else {
        console.log(`Деякі з даних введено не вірно`);
}
// -----------------------------------------------------------


