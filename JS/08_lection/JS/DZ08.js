// 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
// Дані виводяться в стилізований список, можете підключити bootstrap чи написати свої стилі. 
// При введені більше 5 пунктів, перший пункт видаляється. В пункті який добавляється повино 
// бути данні які введено і час створення в форматі день, номер місяця, рік і час години хвилини.

window.onload=function(){

let button = document.querySelector('.AddListItem');
let taskOneUl = document.querySelector('.listTaskOne');
let nowTime = new Date;

function addElement() {
    
    let userData = prompt(`Що добавляємо ?`);
    let newElement = document.createElement('li');
    newElement.setAttribute('class','taskOneLi');
    newElement.innerText = `${userData} створено ${nowTime.toLocaleString()}`;
    taskOneUl.appendChild(newElement);
    console.log(newElement);

    let calcLiItems = document.querySelectorAll('.taskOneLi');
    
    let CheckArr = Array.from(calcLiItems);
    console.log(CheckArr);
    
    if (CheckArr.length > 5){
        calcLiItems[0].remove()
    }
}

button.addEventListener('click', addElement);

// 2) створити массив обєктів і на оcнові нього вивести на сторінку лінки в яких знаходяться 
// зображення і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3. 

let images = [
        {
            imgPath:'img/image.png',
            alt:'Кит',
            href:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jumping_Humpback_whale.jpg/1280px-Jumping_Humpback_whale.jpg'
        },
        {
            imgPath:'img/image.png',
            alt:'Дельфін',
            href:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Common_dolphin_noaa.jpg/1920px-Common_dolphin_noaa.jpg'
        },
        {
            imgPath:'img/image.png',
            alt:'Касатка',
            href:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1280px-Killerwhales_jumping.jpg'
        },
        {
            imgPath:'img/image.png',
            alt:'Риба-меч',
            href:'https://rybkivse.ru/wp-content/uploads/2017/10/%D1%84%D0%BE%D1%82%D0%BE-2.jpeg'
        },
        {
            imgPath:'img/image.png',
            alt:'Риба-молот',
            href:'https://zooclub.org.ua/assets/files/2018/01/gigantskaya-akula-molot.webp'
        }
    ]

    let taskTwo = document.querySelector('.listTaskTwo');

    images.forEach((item) => {
        let newElementTaskTwo = document.createElement('a');
        newElementTaskTwo.innerText = item.alt;
        newElementTaskTwo.setAttribute('href', item.href);
        newElementTaskTwo.setAttribute('target', '_blank');
    
        let listItemTaskTwo = document.createElement("li");
        listItemTaskTwo.setAttribute('style', 'margin-top:2rem; margin-left:10rem;')
        taskTwo.appendChild(listItemTaskTwo);
        taskTwo.lastChild.appendChild(newElementTaskTwo);
    });

// 3) Створити таблицю за допомогою js з полями імя, місто, курс і заповнити її даними також за 
// допомогою js. В таблиці повино бути мінімум 2 рядки

let tableTaskThree = [
    {
        title: 'Імя',
        city: ' Київ',
        course: '1',
        name: 'Коля',
    },
    {
        title: 'Місто',
        city: ' Львів',
        course: '2',
        name: 'Оля',
    },
    {
        title: 'Курс',
        city: ' Одеса',
        course: '3',
        name: 'Юля',
    },
];

let conter = document.querySelector('.taskThree');

let createTable = document.createElement('table');
let tableFirstRow = document.createElement('tr');

conter.appendChild(createTable);
createTable.appendChild(tableFirstRow);

tableTaskThree.forEach((item) => {
    let tableHead = document.createElement('th');
    tableHead.innerText = item.title;
    tableHead.setAttribute('style', 'height: 2rem; border: 2px solid black;');
    tableFirstRow.appendChild(tableHead);
})

tableTaskThree.forEach((item) => {
    let TableRow = document.createElement('tr');
    createTable.appendChild(TableRow);
    let td = document.createElement('td');
    let tdtwo = document.createElement('td');
    let tdthree = document.createElement('td');

    TableRow.appendChild(td).append(item.name);
    TableRow.appendChild(tdtwo).append(item.city);
    TableRow.appendChild(tdthree).append(item.course);

    td.setAttribute('style', 'height: 1rem; border: 1px solid green;');
    tdtwo.setAttribute('style', 'height: 1rem; border: 1px solid green;');
    tdthree.setAttribute('style', 'height: 1rem; border: 1px solid green;');
});

// ----закриття window.onload
}
