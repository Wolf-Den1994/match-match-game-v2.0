import { btnFinal } from '../final/final-html';
import { linkNavbarScore } from '../header/navbar-score';
import { checkClass } from '../utils/check-class';

const MAX_OUTPUT_TO_SCORE = 10;
const nameDB = 'Wolf-Den1994';
const versionDB = 1;
const avatarEmpry = require('../assets/image/avatar-ellipse.png');

let db: IDBDatabase;

function idbOK(): boolean {
  return 'indexedDB' in window && !/iPad|iPhone|iPod/.test(navigator.platform);
}

interface IObjPerson {
  [key: string]: string;
}

export const person: IObjPerson = {
  name: '',
  lastname: '',
  email: '',
  score: '',
  avatar: '',
};

function sortByAge(arr: IObjPerson[]): void {
  arr.sort((a: IObjPerson, b: IObjPerson) => (a.score < b.score ? 1 : -1));
}

function putPeopleInTheTable(): void {
  let output = '';
  if (checkClass(linkNavbarScore, 'active')) {
    const transaction = db.transaction(['people'], 'readonly');
    const people = transaction.objectStore('people');
    const cursor = people.openCursor();
    const data: IObjPerson[] = [];

    cursor.onsuccess = function successIDB(): void {
      const res = cursor.result;

      if (res) {
        data.push(res.value);
        res.continue();
      } else {
        sortByAge(data);
      }
    };

    transaction.oncomplete = function completeIDB(): void {
      output += '<div class="main-title">Best players</div>';

      const len =
        data.length <= MAX_OUTPUT_TO_SCORE ? data.length : MAX_OUTPUT_TO_SCORE;

      for (let i = 0; i < len; i++) {
        output += `
          <div class="player">
            <div class="player-info">
              <div class="player-avatar">
                <img 
                  src="${data[i].avatar ? data[i].avatar : avatarEmpry}" 
                  alt="avatar"
                >
              </div>
              <div class="player-description">
                <p class="player-name">${data[i].name} ${data[i].lastname}</p>
                <p class="player-email">${data[i].email}</p>
              </div>
            </div>
            <div class="player-score">
              <span>Score: </span>
              <span 
                id="score-${i - 1}" 
                class="score"
              >
                ${data[i].score}
              </span>
            </div>
          </div>
        `;
      }

      localStorage.setItem('points', output);

      const mainDiv = <HTMLDivElement>document.querySelector('.main-score');
      mainDiv.innerHTML = output;
    };
  }
}

function personToBase(): void {
  const email = document.querySelector('#user-email') as HTMLInputElement;
  const key = email.value;
  if (key === '') return;

  const transaction = db.transaction(['people'], 'readonly');
  const store = transaction.objectStore('people');

  const request = store.get(key);

  request.onsuccess = function successIndexedbd(): void {
    const { result } = request;

    const transactionAdd = db.transaction(['people'], 'readwrite');
    const storeAdd = transactionAdd.objectStore('people');

    const transactionPoint = db.transaction(['points'], 'readwrite');
    const storePoint = transactionPoint.objectStore('points');

    const name = document.querySelector('#user-name') as HTMLInputElement;
    const lastName = document.querySelector(
      '#user-lastname',
    ) as HTMLInputElement;
    const nameValue = name.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;

    person.name = nameValue;
    person.lastname = lastNameValue;
    person.email = emailValue;

    if (result !== undefined) {
      if (person.score > result.score) {
        storeAdd.put(person);
        storePoint.put(person);
      }
    } else {
      storeAdd.add(person);
      storePoint.add(person);
    }
  };
  setTimeout(() => {
    putPeopleInTheTable();
  }, 600);
}

export function indexedDBcall(): void {
  if (!idbOK()) return;

  const openRequest = indexedDB.open(nameDB, versionDB);

  openRequest.onupgradeneeded = function upgradeneededIndexed(): void {
    const thisDB = openRequest.result;
    if (!thisDB.objectStoreNames.contains('people')) {
      thisDB.createObjectStore('people', { keyPath: 'email' });
    }

    if (!thisDB.objectStoreNames.contains('points')) {
      thisDB.createObjectStore('points', {
        keyPath: 'score',
        autoIncrement: true,
      });
    }
  };

  openRequest.onsuccess = function successIndexed(): void {
    db = openRequest.result;
    btnFinal.addEventListener('click', personToBase);
    linkNavbarScore.addEventListener('click', putPeopleInTheTable);
  };
}
