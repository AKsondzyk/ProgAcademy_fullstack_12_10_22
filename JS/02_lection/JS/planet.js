// створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи
// то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planet = prompt("Введіть назву планети");
switch (planet) {
  case "Меркурій":
    alert(`ця планета в сонячній системі`);
    break;
  case "Венера":
    alert(`ця планета в сонячній системі`);
    break;
  case "Земля":
    alert(`ця планета в сонячній системі`);
    break;
  case "Марс":
    alert(`ця планета в сонячній системі`);
    break;
  case "Юпітер":
    alert(`ця планета в сонячній системі`);
    break;
  case "Сатурн":
    alert(`ця планета в сонячній системі`);
    break;
  case "Уран":
    alert(`ця планета в сонячній системі`);
    break;
  case "Нептун":
    alert(`ця планета в сонячній системі`);
    break;
  default:
    alert(`такої планети нема в сонячній системі`);
}