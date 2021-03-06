import { objWithSetting } from './obj-setting';
import { toMemorizeCards } from './memorize';
import { CardNumber, FaceType, StateCard, Tags } from '../utils/enum';
import { FIELD } from '../utils/consts';

const imageBack = require('../assets/image/back-card.png');

export const renderField = function renderGameField(
  cardonField: HTMLElement,
): void {
  const generatorRandom = function generatorRandomCard(): number[] {
    const array: number[] = [];
    let result: number[] = [];
    const diff = objWithSetting.difficulty;
    for (let i = 1; i <= (diff * diff) / 2; i++) array.push(i);
    const shuffleArray = function shuffle(arr: number[]): number[] {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };
    for (let i = 0; i < 2; i++) {
      result = [...result, ...shuffleArray(array)];
    }
    const resultRandom = result.sort(
      () => Math.round(Math.random() * 100) - 50,
    );
    return resultRandom;
  };

  const cardon = function fieldCardon(): void {
    const random = generatorRandom();
    const wrapper = document.createElement(Tags.Div);
    wrapper.className = FIELD;
    wrapper.id = FIELD;
    cardonField.append(wrapper);

    let face: string;
    if (objWithSetting.card === CardNumber.Pets) {
      face = FaceType.Pets;
    } else if (objWithSetting.card === CardNumber.Nature) {
      face = FaceType.Nature;
    } else {
      face = FaceType.Farm;
    }

    for (let i = 0; i <= random.length - 1; i++) {
      const div = document.createElement(Tags.Div);
      div.className = `card cardn${random[i]} turn`;
      wrapper.append(div);

      const fliper = document.createElement(Tags.Div);
      fliper.className = StateCard.Flipper;
      div.append(fliper);

      const front = document.createElement(Tags.Div);
      const back = document.createElement(Tags.Div);
      front.className = StateCard.Front;
      front.innerHTML = `
        <img 
          src="${imageBack}" 
          alt="card" 
          class="card__img"
        >
      `;
      back.className = StateCard.Back;
      back.innerHTML = `
        <img 
          src="./images/${face}/${random[i]}.svg" 
          alt="card" 
          class="card__img"
        >
      `;
      fliper.append(front);
      fliper.append(back);
    }
  };
  cardon();
  toMemorizeCards();
};
