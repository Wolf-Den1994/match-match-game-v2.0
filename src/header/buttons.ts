import { Tags } from '../utils/enum';
import { divHeaderRight } from './divs';

const btnRegister = document.createElement(Tags.Button);
btnRegister.className = 'btn-register';
btnRegister.innerHTML = `register new player`;
divHeaderRight.append(btnRegister);

export const btnStartGame = document.createElement(Tags.Button);
btnStartGame.className = 'btn-start-game hidden';
btnStartGame.innerHTML = `start game`;
divHeaderRight.append(btnStartGame);

export const btnStopGame = document.createElement(Tags.Button);
btnStopGame.className = 'btn-stop-game hidden';
btnStopGame.innerHTML = `stop game`;
divHeaderRight.append(btnStopGame);
