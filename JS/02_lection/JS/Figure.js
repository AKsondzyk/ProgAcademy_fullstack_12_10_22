// -----------------------------------------------------------
// - отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій довжина і ширина це отримані значення
// ------------------------------------------------------------
let FigureWidht = parseInt(prompt('введіть ширину фігури',1));
let FigureHeight = parseInt(prompt('введіть висоту фігури',1));
let FigureROW = ' ';
let FigureColumn = ' ';

for (x = 0; x < FigureWidht; x++) {
    FigureROW = FigureROW + '*';
    console.log(FigureROW);
}
for (y = 0; y < FigureHeight; y++) {
    FigureColumn = FigureColumn + '*';
    console.log(FigureColumn);
}