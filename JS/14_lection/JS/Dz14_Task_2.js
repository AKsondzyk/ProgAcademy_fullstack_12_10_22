// 2) Створити сторінку, яка отримує список порід. Список порід вивести в вигляді списку. 
// При кліку на породу собаки, зробити запит і вивести фото поруч з назвою породи.
// Використати АПІ https://dog.ceo/dog-api/documentation/


let body = document.body;

let url2 = 'https://dog.ceo/api/breeds/list/all';

// -----Запит до сайту---------------
async function Dogs(){
    let result2 = await fetch(url2);
    data = await result2.json();
    console.log(data);
    return data;
};


// ----виклик функції----------
Dogs();
