/* eslint-disable semi */
/* eslint-disable no-unused-vars */

// CONSTRUCTORS

const board = (() => {

    const board = []

    const markCell = (shape, cell) => {
        cellList[cell].innerHTML = shape;
    }
    
    return {markCell};

})();


const playerFactory = (name, shape) => {



    return {name, shape};  
}

const turnChange = (() => {
    let turn = 1;
    const change = () => {
        if (turn === 1) {
            turn = 2;
            console.log(`turn ${turn}`);
        } else if (turn === 2) {
            turn = 1;
            console.log(`turn ${turn}`);

        }
    }
    return {change};
})();


// LEFT SIDE 
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
}

const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const playerNameBtn = document.getElementById('player-name-btn');
const resetGameBtn = document.getElementById('reset-game-btn');
const resetScoreBtn = document.getElementById('reset-score-btn');




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

    player1Name.innerHTML = `${firstPlayerName}`;
    player2Name.innerHTML = `${secondPlayerName}`;

    body.click();
})

