let NuberOne = parseFloat(prompt('Введіть перше число для математичних операцій'));
let UserFirstNumber = 'Ваше перше введене число = ' + NuberOne;

let NuberTwo = parseFloat(prompt('Введіть друге число для математичних операцій' ));
let UserSecondtNumber = 'Ваше друге введене введене число = ' + NuberTwo;

console.log(UserFirstNumber,);
console.log(UserSecondtNumber);

let SumOperation = NuberOne + NuberTwo;
let DiffernsOperation = NuberOne - NuberTwo;
let MultiplicationOperation = NuberOne * NuberTwo;
let DivisionOperation = NuberOne / NuberTwo;

console.log('Сума двох чисел',SumOperation)
console.log('Різниця двох чисел',DiffernsOperation)
console.log('Множення двох чисел',MultiplicationOperation)
console.log('Ділення першого на друге',DivisionOperation)

// --------------------------------------------------------

let FirstNuberMoreThanTwenty = parseFloat(prompt('Введіть перше число що більше 20' ));
let SecondNuberMoreThanThirty = parseFloat(prompt('Введіть перше число що більше 30' ));

console.log('Чи введено перше число > 20 а друге > 30 ?', FirstNuberMoreThanTwenty>20 && SecondNuberMoreThanThirty>30);