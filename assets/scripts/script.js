/* eslint-disable semi */
/* eslint-disable no-unused-vars */

// CONSTRUCTORS

const board = (() => {

    const board = []

    const markCell = (shape, cell) => {
        cellList[cell].innerHTML = `${shape}`;
    }
    
    return {markCell};

})();


const playerFactory = (name, shape) => {



    return {name, shape};  
}

const turnChange = (() => {
    let turn = 1;
    let shape = "X";
    const change = () => {
        if (turnChange.turn === 1) {
            turnChange.turn = 2;
            turnChange.shape = "O";
            console.log(`turn ${turnChange.turn}`);
        } else if (turnChange.turn === 2) {
            turnChange.turn = 1;
            turnChange.shape = "X";
            console.log(`turn ${turnChange.turn}`);
        }
    }

    const reset = () => {
        turnChange.turn = 1;
        turnChange.shape = "X";
    }

    return {change, turn, shape, reset};
})();


// GENERAL
const body = document.getElementById('body');
const popup = document.querySelector('.naming-container');
const form = document.querySelector('.player-name-form');
const inputs = document.querySelectorAll('.input');

//FORM FIELDS

const receivedFirstPlayer = document.querySelector('.player-1-name-input');
const receivedSecondPlayer = document.querySelector('.player-2-name-input');


//BOARD

const cellList = document.querySelectorAll('.board-btn')

for (let i = 0; i < cellList.length; i++) {
    cellList[i].id = `${i}`;
    const currentCell = cellList[i];
    currentCell.addEventListener('click', () => {

        if (currentCell.innerHTML === "") {
            board.markCell(turnChange.shape, [i]);
            turnChange.change();
        }

    })
}




// LEFT SIDE 
const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const playerNameBtn = document.getElementById('player-name-btn');
const resetGameBtn = document.getElementById('reset-game-btn');
const resetScoreBtn = document.getElementById('reset-score-btn');

//RIGHT SIDE
const player1ScoreName = document.getElementById('player1NameScore'); 
const player2ScoreName = document.getElementById('player2NameScore');


playerNameBtn.addEventListener('click', (e) => {
    if (popup.style.visibility === 'visible') {
        body.click();
      } else {
        popup.style.cssText = 'transform: translate(-50%, -50%) scale(1); visibility: visible; transition: 0.2s ease-in;';
        body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        form.reset();
        e.stopPropagation();
      }
})

body.addEventListener('click', () => {
    if (popup.style.visibility === 'visible') {
      popup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
      body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    // if (searchPopup.style.visibility === 'visible' || searchPopup.style.visibility === 'visible') {
    //   searchPopup.style.cssText = 'transform: translate(-50%, -50%) scale(0.1); visibility: hidden;';
    //   body.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    // }
  })

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', (e) => {
        e.stopPropagation();
    })
}

popup.addEventListener('click', (e) => {
    e.stopPropagation();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstPlayerName = receivedFirstPlayer.value;
    const secondPlayerName = receivedSecondPlayer.value;

    if (firstPlayerName !== "") {
        player1Name.innerHTML = `${firstPlayerName}`;
        player1ScoreName.innerHTML = `${firstPlayerName}`;
    }
    if (secondPlayerName !== "") {
        player2Name.innerHTML = `${secondPlayerName}`;
        player2ScoreName.innerHTML = `${secondPlayerName}`;
    }



    body.click();
})

resetGameBtn.addEventListener('click', () => {
    for (let i = 0; i < cellList.length; i++) {
        cellList[i].id = `${i}`;
        const currentCell = cellList[i];
        board.markCell("", [i]);
        turnChange.change();
        }
    turnChange.reset();
})


