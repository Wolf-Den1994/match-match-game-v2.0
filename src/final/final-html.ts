const root = document.getElementById('root');

if (!root) throw new Error('root is not found');

const finalHTML = `
  <div class="modal-congratulate">
    <p class="congratulate-text">
      Congratulations! You successfully found all the matches. 
      Your time is <span class="congratulate-time"></span>.
    </p>
    <button class="congratulate-button">ok</button>
  </div>
`;

function renderingModalCongratulate() {
  if (!root) throw new Error('root is not found');
  root.insertAdjacentHTML('beforebegin', finalHTML);
}
renderingModalCongratulate();
