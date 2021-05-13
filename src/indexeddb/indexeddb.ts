function idbOK() {
  return 'indexedDB' in window && !/iPad|iPhone|iPod/.test(navigator.platform);
}

let db: IDBDatabase;

function updatePerson() {
  const name = document.querySelector('#user-name') as HTMLInputElement;
  const lastName = document.querySelector('#user-lastname') as HTMLInputElement;
  const email = document.querySelector('#user-email') as HTMLInputElement;
  const nameValue = name.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;

  const transaction = db.transaction(['people'], 'readwrite');
  const store = transaction.objectStore('people');

  const person = {
    name: nameValue,
    lastname: lastNameValue,
    email: emailValue,
    score: '500',
  };

  store.put(person);
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
    const submitXXX = document.querySelector('.form-submit') as HTMLElement;
    submitXXX.addEventListener('click', updatePerson);
  };
}
