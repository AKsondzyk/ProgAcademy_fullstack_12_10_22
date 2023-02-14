// Створити запит до сервісу : https://jsonplaceholder.typicode.com/users за допомогою htmlHttprequest

const xhr = new XMLHttpRequest();

xhr.open("get", "https://jsonplaceholder.typicode.com/users");
xhr.responseType = "json";
xhr.send();

// 1) отриманні данні вивести на сторінку в вигляді стилізованих карток, в картці повина бути кнопка "select"


// 2)При кліку на кнопку "select" вибрані іd користувачів повині записувати в  localStorage,  
// також повинно бути записано в localStorage скільки користувачів вибрано.

// Додадткове завдання:
// Створити інпут в якому можна буде шукати користувачів по імені. (всі користувачі в яких не співпадає імя 
// повині зникати)