// 1) Вивести список планет в вигляді карток, і зробити кнопки для фільтрування планет за розміром 
// (при кліку на кнопку планети повині вивестись від більшого розміру до меншого і при кліку знову
//  від меншого до більшого) Зробити такий самий фільтр по population. 
// Використати https://swapi.dev/api/planets

let body = document.body;
body.setAttribute('style','display: flex; justify-content: center; gap: 10px; flex-direction: column;');

let url1 = 'https://swapi.dev/api/planets';
let data = {};

// -----Запит до сайту---------------
async function Planet(){
    let result1 = await fetch(url1);
    data = await result1.json();
    // console.log(data);
    return data;
};

// ----Створення карт даних----------
let cardCreate = function () {
    Planet()
        .then(function () { console.log(data.results) }) // повертає масив в консоль
        .then(function () {
            data.results.forEach((index) => {
                let CreateDiv = document.createElement('div');
                CreateDiv.setAttribute('style', 'border: 2px solid black; width: 25%;');
                CreateDiv.setAttribute('class', 'Main');

                let ul = document.createElement('ul');
                ul.innerText = `${index.name}`;
                ul.setAttribute('style', 'font-weight: bold;');

                let population = document.createElement('li');
                population.innerText = `Population = ${index.population}`;
                population.setAttribute('style', 'font-weight: normal;');
                population.setAttribute('class', 'population');

                let diameter = document.createElement('li');
                diameter.innerText = `Diameter = ${index.diameter}`;
                diameter.setAttribute('style', 'font-weight: normal;');
                diameter.setAttribute('class', 'diameter');

                ul.appendChild(population);
                ul.appendChild(diameter);

                CreateDiv.appendChild(ul);

                body.appendChild(CreateDiv);
                return;
            })
        })

};

// -------кнопки сортування-----------
let ButPopulation = document.createElement('button');
ButPopulation.setAttribute('style', 'background-color: orange; width: 10%;');
ButPopulation.innerText = 'Sort by Population';

let ButDiametr = document.createElement('button');
ButDiametr.setAttribute('style', 'background-color: orange; width: 10%;');
ButDiametr.innerText = 'Sort by Diametr';

body.appendChild(ButPopulation);
body.appendChild(ButDiametr);

// ----виклик функції----------
cardCreate();

// ----функція сортування------
let firstPress = true;

ButPopulation.onclick = function (){
    let AllDiv = document.querySelectorAll('.Main '); // вибираэсо всі Div

    // console.log(AllDiv);

    let ident = /\d+/;                                // задаємо патерн для пошуку цифр
    

    if (firstPress) {
        firstPress = !firstPress;

        AllDiv.forEach((index) => {                                // у всіх Div шукаємо li з популяцією
            let Order = index.children[0].children[0].innerText;
            console.log(Order);
            let Res = [];

            if (Order !== "Population = unknown") {          // якщо популяція задано додаємо в Res
                Res = Order.match(ident);
            }
            else {
                Res.push(0);                                  // якщо ні - Res = 0
            }

            // console.log(Res);

            if (Res.lenhgt !== 0) {
                index.setAttribute('style', `border: 2px solid black; width: 25%; order: ${Res};`);
            }
            else {
                // Res = 0;
                index.setAttribute('style', `border: 2px solid black; width: 25%; order: 0;`);
            };
        });
    }
    else{
        firstPress = !firstPress;

        AllDiv.forEach((index) => {                                // у всіх Div шукаємо li з популяцією
            let Order = index.children[0].children[0].innerText;
            // console.log(Order);
            let Res = [];

            if (Order !== "Population = unknown") {          // якщо популяція задано додаємо в Res
                Res = Order.match(ident);
            }
            else {
                Res.push(0);                                  // якщо ні - Res = 0
            }

            // console.log(Res);

            if (Res.lenhgt !== 0) {
                index.setAttribute('style', `border: 2px solid black; width: 25%; order: ${Res*-1};`);
            }
            else {
                // Res = 0;
                index.setAttribute('style', `border: 2px solid black; width: 25%; order: 0;`);
            };
        });
    }
};




// Planet().then(function(){console.log(data.results)}).then(cardCreate());

// 5) додаткове завдання зробити фільтр який вибирає яка планета найчастіше зявлялась в фільмах 
// підказка: чим більше довжина "films"