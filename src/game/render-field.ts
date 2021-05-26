import { objWithSetting } from './obj-setting';
import { toMemorizeCards } from './memorize';

const imageBack = require('../assets/image/back-card.png');

export function renderField(cardonField: HTMLElement): void {
  function generatorRandom() {
    const array: number[] = [];
    let result: number[] = [];
    const diff = objWithSetting.difficulty;
    for (let i = 1; i <= (diff * diff) / 2; i++) array.push(i);
    function shuffleArray(arr: number[]) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    for (let i = 0; i < 2; i++) {
      result = [...result, ...shuffleArray(array)];
    }
    const resultRanodm = result.sort(
      () => Math.round(Math.random() * 100) - 50,
    );
    return resultRanodm;
  }

  function cardon() {
    const random = generatorRandom();
    const wrapper = document.createElement('div');
    wrapper.className = 'field';
    wrapper.id = 'field';
    cardonField.append(wrapper);

    let face: string;
    if (objWithSetting.card === '1') {
      face = 'pets';
    } else if (objWithSetting.card === '2') {
      face = 'nature';
    } else {
      face = 'farm';
    }

    for (let i = 0; i <= random.length - 1; i++) {
      const div = document.createElement('div');
      div.className = `card cardn${random[i]} turn`;
      wrapper.append(div);

      const fliper = document.createElement('div');
      fliper.className = 'flipper';
      div.append(fliper);

      const front = document.createElement('div');
      const back = document.createElement('div');
      front.className = 'front';
      front.innerHTML = `
        <img 
          src="${imageBack}" 
          alt="card" 
          class="card__img"
        >
      `;
      back.className = 'back';
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
  }
  cardon();
  toMemorizeCards();
}
