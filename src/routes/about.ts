const image1 = require('../assets/image/image1.png');
const image2 = require('../assets/image/image2.png');
const image3 = require('../assets/image/image3.png');

export const about = `
  <main class="main">
    <h2 class="main-title">How to play?</h2>
    <div class="main-top">
      <div class="main-top-card">
        <div class="card-one card-number">
          <div class="card-number-num">1</div>
        </div>
        <p>Register new player in game</p>
      </div>
      <div class="main-top-block-image">
        <img src="${image1}" alt="register">
      </div>
    </div>
    <div class="main-middle">
      <div class="main-middle-card">
        <div class="card-two card-number">
          <div class="card-number-num">2</div>
        </div>
        <p>Configure your game settings</p>
      </div>
      <div class="main-middle-block-image">
        <img src="${image2}" alt="settings">
      </div>
    </div>
    <div class="main-bottom">
      <div class="main-bottom-card">
        <div class="card-three card-number">
          <div class="card-number-num">3</div>
        </div>
        <p>Start you new game! Remember card <br>
          positions and match it before times up.</p>
      </div>
      <div class="main-bottom-block-image">
        <img src="${image3}" alt="settings">
      </div>
    </div>
  </main>
`;
