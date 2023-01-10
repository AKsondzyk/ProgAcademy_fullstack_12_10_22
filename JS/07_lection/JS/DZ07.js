// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li, 
// отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml.

window.onload = ()=>{
    let [...hdr] = document.getElementsByTagName('header');
    // console.log(hdr);
    hdr.forEach(item=>{
        item.innerHTML = '<div>This text we find in JS</div>'
    });
// --------

    let [firstItem] = document.getElementsByClassName('first');
    // console.log(firstItem);
    firstItem.innerHTML = 'This is first list item from JS';
// --------

    // let [...listItem] = document.getElementById('list');
    // console.log(listItem);
    // listItem.forEach(i=>{
    //     i.innerHTML = 'List from JS'
    // })


    let listItem = document.querySelector('#list');
    console.log(listItem);
    listItem.innerHTML = 'List from JS'

}

// 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу 
// вивести в консоль отримане значення

let TaskTwo = document.querySelector('li');
console.log(TaskTwo.parentElement);

// 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, 
// кількість переглядів).

class FilmsAdd{
    constructor(Year, genre, title, view){
        this.Year = Year;
        this.genre = genre;
        this.title = title;
        this.view = view;
    }
    // --метод завдання №4-----
    ranking(){
        let nowDay = new Date();
        let Rate = 0;
        if (this.Year>0 && this.view>0){
            Rate = (this.view / (nowDay.getFullYear() - this.Year));
            return (`Рейтинг фільму ${this.title} складає ${Rate}`);
        }
        else{
            return (`Не достатньо даних для рейтингу`);
        }
        // return;
    }
}
// ---------перевірка завдання №3---------
console.log(`---частина завдання №3---`);
let Avatar = new FilmsAdd(2009,`fantasy`,`Avatar`,1300000);
console.log(Avatar);

let MrAndMsSmith = new FilmsAdd(2005,`comedy`,`Mr. and Ms. Smith`,501000);
console.log(MrAndMsSmith);

// 4) В классі створити метод який визначає рейтинг в залежності від року випуску і кількості 
// переглядів ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску) 

// ---------перевірка завдання №4---------
console.log(`---частина завдання №4---`);
let AvatarPartTwo = new FilmsAdd(2022,`fantasy`,`AvatarPArtTwo`, 30000);

console.log(AvatarPartTwo);
console.log(AvatarPartTwo.ranking());

// 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою 
// синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.

let TaskFive = [Avatar, MrAndMsSmith, AvatarPartTwo];

console.log(`---початковий масив завдання №5---`);
console.log(TaskFive);

console.log(`перебраний масив завдання №5`);
let [...filmsName] = TaskFive;
filmsName.sort((a, b)=> a.Year-b.Year);
console.log(filmsName);
