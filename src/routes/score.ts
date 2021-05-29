export const score = `
  <main class="main-score">
    <div class="main-title">Best players</div>
  </main>
`;

const TIME_AFTER_WHICH_SCORE_APPEAR = 500;

setTimeout(() => {
  const mainDiv = document.querySelector('.main-score');
  if (mainDiv) {
    const output = localStorage.getItem('points');
    if (output) {
      mainDiv.innerHTML = output;
    }
  }
}, TIME_AFTER_WHICH_SCORE_APPEAR);
