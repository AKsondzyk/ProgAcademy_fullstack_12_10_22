// --------------------------
// - напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"
// --------------------------
let Login = prompt("Please enter your login");
let Password = prompt("Please enter your password");
if (Login == "admin" && Password == "12345") {
    alert('вітаємо в системі');
} 
else {
    alert('Пароль логін не вірні');
}

// ---------------------------------------
// -Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) створити змінну яка отримує true якщо вік більше 18  i false якщо менше
// --------------------------------------
let Age = parseFloat(prompt("Введіть ваш вік"));
let Check = Age > 18 ? true : false;
console.log('Чи є користувачеві 18?',Check);