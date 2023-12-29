function buttonCreation(){
    const button = document.querySelector('.buttons-container')
    for(let num = 0; num < 10; num++){
        let calcButton = document.createElement('button');
        calcButton.textContent = num
        button.appendChild(calcButton);
    }
}

// function displayCreate(){
//     const display = document.querySelector('.display');
// for(let grids = 0;grids < 16;grids++){
//     let grid = document.createElement('div')
//     display.appendChild(grid);
// }
// }