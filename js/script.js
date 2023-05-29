"use strict";

// FUNZIONE PER CREARE GRIGLIA
function createNewGame(){
    const grid = document.getElementById('grid');

    // SVUOTARE GRIGLIA
    grid.innerHTML = '';

    // RICHIAMO FUNZIONE PER CREARE CELLE
    createCells();
}

// FUNZIONE PER CREARE CELLE
function createCells(){

    for (let i = 0; i < 100; i++){

        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = i + 1;

        square.addEventListener('click',function(){
            this.classList.add('clicked');
            console.log(this);            
        })

        grid.append(square);
    }
}


const button = document.getElementById('play_btn')

// FUNZIONE PLAY BUTTON
button.addEventListener("click", function(){

    createNewGame();
})