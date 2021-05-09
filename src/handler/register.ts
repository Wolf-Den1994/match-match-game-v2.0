const btnRegister = document.querySelector('.btn-register');
const imagesCheck = document.querySelectorAll('.img-check-register');

function openModalRegister() {
  console.log('open');
  if (imagesCheck) {
    imagesCheck.forEach((image) => {
      image.classList.remove('check-hidden');
    });
  }
}

if (btnRegister) {
  btnRegister.addEventListener('click', openModalRegister);
}
