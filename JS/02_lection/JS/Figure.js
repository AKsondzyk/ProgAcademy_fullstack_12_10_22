// -----------------------------------------------------------
// - отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій довжина і ширина це отримані значення
// ------------------------------------------------------------
let FigureWidht = parseInt(prompt('введіть ширину фігури',1));
let FigureHeight = parseInt(prompt('введіть висоту фігури',1));

for (let y = 0; y<FigureHeight; y++) {
    let FigureROW = '';
    for(let x=0; x<FigureWidht; x++){
        FigureROW += '*';
    }
    console.log(FigureROW);
    console.log();
}
