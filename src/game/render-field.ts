import { objWithSetting } from './obj-setting';
import { ImageCategoryModal } from '../models/image-catecory-model';

const imageBack = require('../assets/image/back-card.png');

export function renderField(cardonField: HTMLElement): void {
  function generatorRandom() {
    const array: number[] = [];
    let result: number[] = [];
    for (
      let i = 1;
      i <= (+objWithSetting.difficulty * +objWithSetting.difficulty) / 2;
      i++
    )
      array.push(i);
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
    // console.log(random, objWithSetting);

    const wrapper = document.createElement('div');
    wrapper.className = 'field';
    wrapper.id = 'field';
    cardonField.append(wrapper);

    async function getImages() {
      const res = await fetch('./images.json');
      const category: ImageCategoryModal[] = await res.json();
      const peekCategory = category[+objWithSetting.card - 1];
      const images = peekCategory.images.map(
        (name) => `${peekCategory.category}/${name}`,
      );
      return images;
    }

    const imageFace = getImages();
    imageFace.then((res) => {
      for (let i = 0; i <= random.length - 1; i++) {
        const div = document.createElement('div');
        div.className = `card cardn${random[i]}`;
        wrapper.append(div);

        const fliper = document.createElement('div');
        fliper.className = 'flipper';
        div.append(fliper);

        const front = document.createElement('div');
        const back = document.createElement('div');
        front.className = 'front';
        front.innerHTML = `<img src="./images/${
          res[random[i]]
        }" alt="card" class="card__img">`;
        back.className = 'back';
        back.innerHTML = `<img src="${imageBack}" alt="c" class="card__img">`;
        fliper.append(front);
        fliper.append(back);
      }
    });
  }
  cardon();
}
