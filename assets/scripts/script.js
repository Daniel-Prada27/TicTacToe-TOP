/* eslint-disable semi */
/* eslint-disable no-unused-vars */

//BOARD

const cellList = document.querySelectorAll('.board-btn')

// CONSTRUCTORS

const board = (() => {

    for (let i = 0; i < cellList.length; i++) {
        cellList[i].id = `${i}`;
        const currentCell = cellList[i];
        currentCell.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentCell.innerHTML === "") {
                board.markCell(turnChange.shape, [i]);
                turnChange.change();
                board.checkWin();
            }
    
        })
    }


    let firstRow = [cellList[0], cellList[1], cellList[2]];
    let secondRow = [cellList[3], cellList[4], cellList[5]];
    let thirdRow = [cellList[6], cellList[7], cellList[8]];
    const allEqual = arr => arr.every(val => val.innerHTML === arr[0].innerHTML);
    const checkWin = () => {
        for (let i = 0; i < firstRow.length; i++) {
            console.log(firstRow[i].innerHTML);
            if (firstRow[i].innerHTML !== "") {
                if (firstRow[i].innerHTML === secondRow[i].innerHTML && (secondRow[i].innerHTML === thirdRow[i].innerHTML)) {
                    if (firstRow[i].innerHTML === "X") {
                        player1.win();
                        player1Score.innerHTML = `${player1.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    } else if (firstRow[i].innerHTML === "O") {
                        player2.win();
                        player2Score.innerHTML = `${player2.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    } else {
                        return;
                    }
                }
                if (allEqual(firstRow)) {
                    if (firstRow[i].innerHTML === "X") {
                        player1.win();
                        player1Score.innerHTML = `${player1.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    } else if (firstRow[i].innerHTML === "O") {
                        player2.win();
                        player2Score.innerHTML = `${player2.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    }
                }
            }
            if (secondRow[i].innerHTML !== "") {
                if (allEqual(secondRow)) {
                    if (secondRow[i].innerHTML === "X") {
                        player1.win();
                        player1Score.innerHTML = `${player1.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    } else if (secondRow[i].innerHTML === "O") {
                        player2.win();
                        player2Score.innerHTML = `${player2.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    }
                }
            }
            if (thirdRow[i].innerHTML !== "") {
                if (allEqual(thirdRow)) {
                    if (thirdRow[i].innerHTML === "X") {
                        player1.win();
                        player1Score.innerHTML = `${player1.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    } else if (thirdRow[i].innerHTML === "O") {
                        player2.win();
                        player2Score.innerHTML = `${player2.winCount()} wins`;
                        resetGameBtn.click();
                        return;
                    }
                }
            }

            if (firstRow[0].innerHTML !== "" && firstRow[0].innerHTML === secondRow[1].innerHTML && secondRow[1].innerHTML === thirdRow[2].innerHTML) {
                if (firstRow[0].innerHTML === "X") {
                    player1.win();
                    player1Score.innerHTML = `${player1.winCount()} wins`;
                    resetGameBtn.click();
                    return;
                } else if (firstRow[0].innerHTML === "O") {
                    player2.win();
                    player2Score.innerHTML = `${player2.winCount()} wins`;
                    resetGameBtn.click();
                    return;
                } else {
                    return;
                }
            }
            if (firstRow[2].innerHTML !== "" && firstRow[2].innerHTML === secondRow[1].innerHTML && secondRow[1].innerHTML === thirdRow[0].innerHTML) {
                if (firstRow[2].innerHTML === "X") {
                    player1.win();
                    player1Score.innerHTML = `${player1.winCount()} wins`;
                    resetGameBtn.click();
                    return;
                } else if (firstRow[2].innerHTML === "O") {
                    player2.win();
                    player2Score.innerHTML = `${player2.winCount()} wins`;
                    resetGameBtn.click();
                    return;
                } else {
                    return;
                }
            }
        }
    }

    const markCell = (shape, cell) => {
        cellList[cell].innerHTML = `${shape}`;
        // checkWin();
    }
    
    return {markCell, checkWin};

})();


const playerFactory = (name, shape) => {

    let winCount = 0;

    return {name, shape, winCount: () => {return winCount;}, win: () => {winCount++;}, resetWin: () => {
        winCount = 0;
    }};  
}

const turnChange = (() => {
    let turn = 1;
    let shape = "X";
    const change = () => {
        if (turnChange.turn === 1) {
            turnChange.turn = 2;
            turnChange.shape = "O";
            // console.log(`turn ${turnChange.turn}`);
        } else if (turnChange.turn === 2) {
            turnChange.turn = 1;
            turnChange.shape = "X";
            // console.log(`turn ${turnChange.turn}`);
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



// LEFT SIDE 
const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const playerNameBtn = document.getElementById('player-name-btn');
const resetGameBtn = document.getElementById('reset-game-btn');
const resetScoreBtn = document.getElementById('reset-score-btn');

//RIGHT SIDE
const player1ScoreName = document.getElementById('player1NameScore'); 
const player2ScoreName = document.getElementById('player2NameScore');
const player1Score = document.getElementById('firstPlayerWins');
const player2Score = document.getElementById('secondPlayerWins');

let player1 = playerFactory(`${receivedFirstPlayer.value}`, "X");
let player2 = playerFactory(`${receivedSecondPlayer.value}`, "O");

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

    player1 = playerFactory(`${receivedFirstPlayer.value}`, "X");
    player2 = playerFactory(`${receivedSecondPlayer.value}`, "O");

    if (player1.name !== "") {
        player1Name.innerHTML = player1.name;
        player1ScoreName.innerHTML = player1.name;
    }
    if (player2.name !== "") {
        player2Name.innerHTML = player2.name;
        player2ScoreName.innerHTML = player2.name;
    }

    body.click();
})

resetGameBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (popup.style.visibility === 'visible') {
        body.click();

    } else {
        for (let i = 0; i < cellList.length; i++) {
            const currentCell = cellList[i];
            currentCell.id = `${i}`;
            currentCell.innerHTML = "";
            // turnChange.change();
            }
        turnChange.reset();
    }

})

resetScoreBtn.addEventListener('click', () => {

    if (popup.style.visibility === 'visible') {
        body.click();
    } else {
        player1Score.innerHTML = "0 wins";
        player2Score.innerHTML = "0 wins";
        player1.resetWin();
        player2.resetWin();
    }

})
