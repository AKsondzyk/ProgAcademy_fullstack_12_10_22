// 1) Вивести список планет в вигляді карток, і зробити кнопки для фільтрування планет за розміром 
// (при кліку на кнопку планети повині вивестись від більшого розміру до меншого і при кліку знову
//  від меншого до більшого) Зробити такий самий фільтр по population. 
// Використати https://swapi.dev/api/planets

let body = document.body;

let url1 = 'https://swapi.dev/api/planets';
let ReadyData = [];

// -----Запит до сайту---------------

fetch(url1)
    .then((response) => response.json())
    .then((data) => {
        ReadyData = data.results;
        CreateCard(ReadyData);
    });

// --------------Створення карт даних----------
// ---Кнопки зверху сторінки---------
let ButPopulation = document.createElement('button');
ButPopulation.setAttribute('style', 'background-color: orange; width: 10%; margin-left: 1%; margin-bottom: 0.5%;');
ButPopulation.innerText = 'Sort by Population';

let ButDiametr = document.createElement('button');
ButDiametr.setAttribute('style', 'background-color: orange; width: 10%; margin-left: 1%; margin-bottom: 0.5%');
ButDiametr.innerText = 'Sort by Diametr';

body.appendChild(ButPopulation);
body.appendChild(ButDiametr);

// ---Div в який вписуємо дані
let MainDiv = document.createElement('div');
MainDiv.setAttribute('style','display: flex; justify-content: center; gap: 10px; flex-direction: column;');
body.appendChild(MainDiv);

// ---Функіця створення даних--------

function CreateCard(ReadyData) {
    MainDiv.innerHTML = "";

    ReadyData.forEach((planet) => {
        let createDiv = document.createElement("div");
        createDiv.setAttribute('style', 'border: 2px solid black; width: 25%;');

        let name = document.createElement("h4");
        name.textContent = planet.name;
        name.setAttribute('style', 'font-weight: bold; margin: 0 auto; ');

        let population = document.createElement("p");
        population.textContent = `Population: ${planet.population}`;
        population.setAttribute('style', 'margin: 2px auto;');

        let diameter = document.createElement("p");
        diameter.textContent = `Diameter: ${planet.diameter}`;
        diameter.setAttribute('style', 'margin: 2px auto;');

        createDiv.appendChild(name);
        createDiv.appendChild(population);
        createDiv.appendChild(diameter);

        MainDiv.appendChild(createDiv);
    });
};

// ---Сортування по кнопках-----------------------
let PopFirtPress = true;
let DiamFirtPress = true;

ButPopulation.addEventListener("click", () => {
    console.log(ReadyData);

    ReadyData.forEach((index) => {
        if (index.population == "unknown") {
            index.population = 0;
        }
    });

    if (PopFirtPress) {
        ReadyData.sort((a, b) => Number.parseFloat(b.population) - Number.parseFloat(a.population));
        CreateCard(ReadyData);
    }
    else {
        ReadyData.sort((a, b) => Number.parseFloat(a.population) - Number.parseFloat(b.population));
        CreateCard(ReadyData);
    }
    PopFirtPress = !PopFirtPress;
});


ButDiametr.addEventListener("click", () => {
    if (DiamFirtPress) {
        ReadyData.sort((a, b) => parseFloat(b.diameter) - parseFloat(a.diameter));
        CreateCard(ReadyData);
    }
    else{
        ReadyData.sort((a, b) => parseFloat(a.diameter) - parseFloat(b.diameter));
        CreateCard(ReadyData);
    }
    DiamFirtPress = !DiamFirtPress;
});