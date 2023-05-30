"use strict";

// FUNZIONE NUMERO CASUALE
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//FUNZIONE PER RIEMPIRE ARRAY BOMBE
function fillArrayBombs(array_bombs, max){

    //VARIABILI DI CONTROLLO
    let check = false;
    let random_number;

    // se la var è false
    while(check === false){
        // genero numero casuale 
        random_number = generateRandomNumber(1, max);
        
        // controllo se l'array delle bombe non include il numero
        if(!array_bombs.includes(random_number)){
            check = true;
        }
    }

    return random_number
}

// FUNZIONE PER CREARE GRIGLIA
function createNewGame(){
    const grid = document.getElementById('grid');
    const div_message = document.getElementById('message');
    const arrayBombs = [];

    // LIVELLO DIFFICOLTA'
    const difficulty = parseInt(document.getElementById('difficulty').value);

    // SVUOTARE GRIGLIA
    grid.innerHTML = '';
    div_message.innerText = '';
    
    let cellsNumber;
    switch(difficulty){
        case 1:
            cellsNumber = 100;
            break;
        case 2:
            cellsNumber = 81;
            break;
        case 3:
            cellsNumber = 49;
            break;
    }

    //INVOCO FUNZIONE PER RIEMPIRE ARRAY BOMBE
    for(let i=0; i<16 ; i++){
        let number = fillArrayBombs(arrayBombs, cellsNumber);
        arrayBombs.push(number);
    }
    console.log(arrayBombs);

    //INVOCO FUNZIONE PER CREARE SINGOLE CELLE
    createCells(cellsNumber, arrayBombs);
}

// FUNZIONE PER CREARE CELLE
function createCells(cells, arrayBombs){

    //RISULTATO: CELLE CLICCATE SENZA BOMBE
    let clickForWin = 0;

    //GENERO LE CASELLE DA SCRIVERE NELLA GRIGLIA
    for (let i = 0; i < cells; i++){

        const square = document.createElement('div');

        let cellsPerRow = Math.sqrt(cells);

        square.classList.add('square');
        square.style.width = `calc(100% / ${cellsPerRow})`;
        square.style.height = square.style.width;

        square.innerText = i + 1;

        square.addEventListener('click',function(){
            this.classList.add('clicked');

            if(!arrayBombs.includes(parseInt(this.innerText))){
                this.classList.add('clicked');
                clickForWin++;
            }
            else{
                this.classList.add('bomb-finded');  
                
                document.getElementById('message').innerText = `Punteggio: ${clickForWin}`
            }
        })

        grid.append(square);
    }
}

const button = document.getElementById('play_btn')

// FUNZIONE PLAY BUTTON
button.addEventListener("click", function(){

    createNewGame();
})