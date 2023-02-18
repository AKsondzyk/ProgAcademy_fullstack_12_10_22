// 2) Створити сторінку, яка отримує список порід. Список порід вивести в вигляді списку. 
// При кліку на породу собаки, зробити запит і вивести фото поруч з назвою породи.
// Використати АПІ https://dog.ceo/dog-api/documentation/

let Flex = document.querySelector('.flex');
Flex.setAttribute('style', 'display: flex; justify-content: space-around;');

let breedsList = document.querySelector('.breeds-list');
let breedImages = document.querySelector('.breed-images');

let UrlFull = 'https://dog.ceo/api/breeds/list/all';
let Url = 'https://dog.ceo/api/breed/';

fetch(UrlFull)
    .then(response => response.json())
    .then(data => {
        let breeds = data.message;
        for (let breed in breeds) {
            let li = document.createElement('li');
            li.textContent = breed;
            li.setAttribute('style', 'font-size: 2rem;');
            breedsList.appendChild(li);
        }
    });

breedsList.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        let breedName = event.target.textContent;
        fetch(`${Url}${breedName}/images/random`)
            .then(response => response.json())
            .then(data => {
                let image = document.createElement('img');
                image.src = data.message;
                breedImages.innerHTML = '';
                breedImages.appendChild(image);
            });
    }
});