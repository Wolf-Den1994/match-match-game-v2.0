export const modalCongratulate = document.createElement('div');
modalCongratulate.className = 'modal-congratulate';
document.body.append(modalCongratulate);

const congratulateText = document.createElement('p');
congratulateText.className = 'congratulate-text';
congratulateText.innerHTML = `
    Congratulations! You successfully found all the matches. 
    Your time is <span class="congratulate-time"></span>.
  `;
modalCongratulate.append(congratulateText);

export const btnFinal = document.createElement('button');
btnFinal.className = 'congratulate-button';
btnFinal.innerHTML = 'ok';
modalCongratulate.append(btnFinal);
