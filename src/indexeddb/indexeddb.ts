import { btnFinal } from '../final/final-html';

function idbOK() {
  return 'indexedDB' in window && !/iPad|iPhone|iPod/.test(navigator.platform);
}

export const person = {
  name: 'nameValue',
  lastname: 'lastNameValue',
  email: 'emailValue',
  score: '500',
};

let db: IDBDatabase;

function personToBase() {
  const email = document.querySelector('#user-email') as HTMLInputElement;
  const key = email.value;
  if (key === '') return;

  const transaction = db.transaction(['people'], 'readonly');
  const store = transaction.objectStore('people');

  const request = store.get(key);

  request.onsuccess = function successIndexedbd() {
    const { result } = request;

    const transactionAdd = db.transaction(['people'], 'readwrite');
    const storeAdd = transactionAdd.objectStore('people');

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
      }
    } else {
      storeAdd.add(person);
    }
  };
}

export function indexedDBcall(): void {
  if (!idbOK()) return;

  const openRequest = indexedDB.open('Wolf-Den1994', 1);

  openRequest.onupgradeneeded = function upgradeneededIndexed() {
    const thisDB = openRequest.result;
    if (!thisDB.objectStoreNames.contains('people')) {
      thisDB.createObjectStore('people', { keyPath: 'email' });
    }
  };

  openRequest.onsuccess = function successIndexed() {
    db = openRequest.result;
    // const submitXXX = document.querySelector('.form-submit') as HTMLElement;
    // submitXXX.addEventListener('click', personToBase);
    btnFinal.addEventListener('click', personToBase);
  };
}
