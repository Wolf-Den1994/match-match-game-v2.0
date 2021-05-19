export const score = `
  <main class="main-score">
    <div class="main-title">Best players</div>
  </main>
`;

setTimeout(() => {
  const mainDiv = document.querySelector('.main-score');
  if (mainDiv) {
    const output = localStorage.getItem('points');
    if (output) {
      mainDiv.innerHTML = output;
    }
  }
}, 500);
