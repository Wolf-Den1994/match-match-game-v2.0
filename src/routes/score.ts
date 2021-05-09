const avatar1 = require('../assets/avatar1.png');

export const score = `
  <main class="main">
    <div class="main-title">Best players</div>
    <div class="player">
      <div class="player-info">
        <div class="player-avatar">
          <img src="${avatar1}" alt="avatar">
        </div>
        <div class="player-description">
          <p class="player-name">Nicci Troiani</p>
          <p class="player-email">nicci@gmail.com</p>
        </div>
      </div>
      <div class="player-score">
        <span>Score: </span><span id="score-l">465</span>
      </div>
    </div>
  </main>
`;
