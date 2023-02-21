window.onload = function(){
let body = document.querySelector('body');

let p = document.querySelector('p');
p.setAttribute('style', 'color: red; font-size: 2rem;');

console.log(p);

let div = document.createElement('div');
div.textContent = 'New Text from JS';
div.setAttribute('style', 'bacground-color: orange;');

body.appendChild(div);
};