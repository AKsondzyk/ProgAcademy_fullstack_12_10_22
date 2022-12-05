let FirsName = prompt('Введіть Ваше ім`я');
let SecondName = prompt('Введіть як Вас по батькові' );

document.write('User name: ' + FirsName + '<br>' + ' User last name: ' + SecondName);

// ----------------------------------------------------------

let LANG = (prompt('Введіть бажану мову "uk" або "ru"').toLowerCase());
let RightLang = uk;

console.log('Чи вибрано мову uk?', LANG === RightLang);
