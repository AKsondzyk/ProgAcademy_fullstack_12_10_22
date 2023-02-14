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

let TaskOne = function () {
    result.forEach((item) => {
    // ---------створення елементів------
        let CreateDiv = document.createElement('div');
        //     card.classList.add('card');

        let ul = document.createElement('ul');

        let li = document.createElement('li');
        //     li.classList.add('item-list');
        li.innerText = `id: ${item.id}`;

        let name = document.createElement('li');
        //     name.classList.add('item-list', 'search');
        name.innerText = item.name;

        let username = document.createElement('li');
        //     username.classList.add('item-list');
        username.innerText = `Username:  ${item.username}`;

        let address = document.createElement('li');
        let addressUl = document.createElement('ul');
        //     address.classList.add('item-list');
        addressUl.innerHTML = `Address:<li>City: ${item.address.city}</li>
                                   <li>GEO: lat ${item.address.geo.lat} lng ${item.address.geo.lng}</li>
                                   <li>Street: ${item.address.street}</li>
                                   <li>Suite: ${item.address.suite}</li>
                                   <li>ZIP: ${item.address.zipcode}</li>`;

        let company = document.createElement('li');
        let companyUL  = document.createElement('ul');
        //     company.classList.add('item-list');
        companyUL.innerHTML = `Company:<li>Name: ${item.company.name}</li>
                                    <li>Bs: ${item.company.bs}</li>
                                    <li>Catch Phrase: ${item.company.catchPhrase}</li>`;


        let email = document.createElement('li');
        //     email.classList.add('item-list');
        email.innerText = ` Email: ${item.email}`;

        let phone = document.createElement('li');
        //     phone.classList.add('item-list');
        phone.innerText = ` Phone: ${item.phone}`;

        let website = document.createElement('li');
        //     website.classList.add('item-list');
        website.innerText = ` Website: ${item.website}`;



        let ButtonDiv = document.createElement('div');
        //     btnBox.classList.add('btn-box');

        let button = document.createElement('button');
        //     btn.classList.add('btn');
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

    //     button.onclick = () => {
    //         localStorage.setItem('id', `${item.id}`);
    //         localStorage.counterKey = ++counter
    //         localStorage[`${item.name}`] = `ID ${item.id}`;

     //     }
    });
};

xhr.onload = TaskOne;

// Додадткове завдання:
// Створити інпут в якому можна буде шукати користувачів по імені. (всі користувачі в яких не співпадає імя 
// повині зникати);