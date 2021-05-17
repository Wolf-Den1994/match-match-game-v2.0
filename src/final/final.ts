export function congratulateTheWinner(): void {
  const overlay = document.getElementById('overlay');
  const root = document.getElementById('root');
  const hour = document.getElementById('hour');
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');

  if (!overlay) throw new Error('overlay is not found');
  if (!root) throw new Error('root is not found');
  if (!hour) throw new Error('hour is not found');
  if (!min) throw new Error('min is not found');
  if (!sec) throw new Error('sec is not found');

  overlay.classList.add('open-modal');
  root.insertAdjacentHTML(
    'beforebegin',
    `
    <div class="modal-congratulate open-modal">
      <p class="congratulate-text">
        Congratulations! You successfully found all the matches. 
        Your time is ${hour.innerText}:${min.innerText}:${sec.innerText}.
      </p>
      <button class="congratulate-button">ok</button>
    </div>
  `,
  );
}
