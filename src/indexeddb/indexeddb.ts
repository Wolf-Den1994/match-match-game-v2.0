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

  //Get a transaction
  //default for OS list is all, default for type is read
  let transaction = db.transaction(['people'], 'readwrite');
  //Ask for the objectStore
  let store = transaction.objectStore('people');

  let person = {
    name: nameValue,
    lastname: lastNameValue,
    email: emailValue,
  };

  //Perform the update
  let request = store.put(person);

  request.onerror = function (e) {
    console.log('Error', e, request.error);
    //some type of error handler
  };

  request.onsuccess = function (e) {
    console.log('Woot! Did it');
  };
}

export function indexedDBcall() {
  // window.onload = function () {
  if (!idbOK()) return;

  const openRequest = indexedDB.open('Wolf-Den1994', 1);

  openRequest.onupgradeneeded = function () {
    const thisDB = openRequest.result;
    console.log('running onupgradeneeded');

    if (!thisDB.objectStoreNames.contains('people')) {
      thisDB.createObjectStore('people', { keyPath: 'email' });
    }
  };

  openRequest.onsuccess = function () {
    console.log('running onsuccess');
    db = openRequest.result;

    // Start listening for button clicks
    const submitXXX = document.querySelector('.form-submit') as HTMLElement;
    submitXXX.addEventListener('click', updatePerson);
  };

  openRequest.onerror = function (e) {
    console.log('onerror!');
    console.dir(e);
  };
}
