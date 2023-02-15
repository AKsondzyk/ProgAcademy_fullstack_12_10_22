// Створити запит до сервісу : https://jsonplaceholder.typicode.com/users за допомогою htmlHttprequest

let xhr = new XMLHttpRequest();
let result = [];
let body = document.body;

xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status === 200) {
        result = xhr.response;
        console.log(result);
    }
    return ;
};

xhr.send();

// 1) отриманні данні вивести на сторінку в вигляді стилізованих карток, в картці повина бути кнопка "select"

// 2)При кліку на кнопку "select" вибрані іd користувачів повині записувати в  localStorage,  
// також повинно бути записано в localStorage скільки користувачів вибрано.

let i=0;

let TaskOne = function () {
    result.forEach((item) => {
    // ---------створення елементів------
        let CreateDiv = document.createElement('div');
        CreateDiv.setAttribute('style', 'display: flex; justify-content: space-around; align-items: center; border: 2px solid black;');

        let ul = document.createElement('ul');
        ul.setAttribute('style', 'list-style-type: none;');

        let li = document.createElement('li');
        li.innerText = `id: ${item.id}`;

        let name = document.createElement('li');
        name.setAttribute('class', 'name');
        name.innerText = item.name;

        let username = document.createElement('li');
        username.innerText = `Username:  ${item.username}`;

        let address = document.createElement('li');
        address.innerHTML = 'Address';
        let addressUl = document.createElement('ul');
        addressUl.setAttribute('style', 'list-style-type: none;');
        addressUl.innerHTML = ` <li>City: ${item.address.city}</li>
                                <li>GEO: lat ${item.address.geo.lat} lng ${item.address.geo.lng}</li>
                                <li>Street: ${item.address.street}</li>
                                <li>Suite: ${item.address.suite}</li>
                                <li>ZIP: ${item.address.zipcode}</li>`;

        let company = document.createElement('li');
        company.innerHTML = 'Company';
        let companyUL  = document.createElement('ul');
        companyUL.setAttribute('style', 'list-style-type: none;');
        companyUL.innerHTML = ` <li>Name: ${item.company.name}</li>
                                <li>Bs: ${item.company.bs}</li>
                                <li>Catch Phrase: ${item.company.catchPhrase}</li>`;


        let email = document.createElement('li');
        email.innerText = ` Email: ${item.email}`;

        let phone = document.createElement('li');
        phone.innerText = ` Phone: ${item.phone}`;

        let website = document.createElement('li');
        website.innerText = ` Website: ${item.website}`;

        let ButtonDiv = document.createElement('div');

        let button = document.createElement('button');
        button.innerText = 'Select';

    // ---------додавання елементів в документ------

        CreateDiv.appendChild(ul);

        ul.appendChild(li);
        ul.appendChild(name);
        ul.appendChild(username);

        ul.appendChild(address);
        address.appendChild(addressUl);

        ul.appendChild(company);
        company.appendChild(companyUL);

        ul.appendChild(email);
        ul.appendChild(phone);
        ul.appendChild(website);

        CreateDiv.appendChild(ButtonDiv);
        ButtonDiv.appendChild(button); 

        body.appendChild(CreateDiv);

        // ---подія на клік----------

        button.onclick = () => {
            localStorage.counterKey = ++i;
            localStorage.setItem('id', `${item.id}`);
         }
    });
};

xhr.onload = TaskOne;

// Додадткове завдання:
// Створити інпут в якому можна буде шукати користувачів по імені. (всі користувачі в яких не співпадає імя 
// повині зникати);

let SearchLabel = document.createElement('label');
SearchLabel.setAttribute('for', 'Search');
SearchLabel.innerText = 'Знайти по імені';

let SearchInput = document.createElement('input');
SearchLabel.setAttribute('type', 'search');
SearchLabel.setAttribute('id', 'Search');

let ButtonSearch = document.createElement('button');
ButtonSearch.innerText = 'Шукати';

body.appendChild(SearchLabel);
body.appendChild(SearchInput);
body.appendChild(ButtonSearch);

let AllName = document.querySelectorAll('.name');
ArrName = Array.from(AllName);

console.log(ArrName); // не добавляються елементи в масив



