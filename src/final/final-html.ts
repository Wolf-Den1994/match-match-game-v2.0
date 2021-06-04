import { Tags } from '../utils/enum';

export const modalCongratulate = document.createElement(Tags.Div);
modalCongratulate.className = 'modal-congratulate';
document.body.append(modalCongratulate);

const congratulateText = document.createElement(Tags.Paragraph);
congratulateText.className = 'congratulate-text';
congratulateText.innerHTML = `
    Congratulations! You successfully found all the matches. 
    Your time is <span class="congratulate-time"></span>.
  `;
modalCongratulate.append(congratulateText);

export const btnFinal = document.createElement(Tags.Button);
btnFinal.className = 'congratulate-button';
btnFinal.innerHTML = 'ok';
modalCongratulate.append(btnFinal);
