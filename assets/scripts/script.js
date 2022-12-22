/* eslint-disable semi */

// LEFT SIDE 
const body = document.getElementById('body');
const popup = document.querySelector('.naming-container');
const form = document.querySelector('.player-name-form');
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
