const btnService = document.querySelector('.button-service');
const modalBackdrop = document.querySelector('.modal-backdrop');
const buttonClose = document.querySelector('.close-button');

btnService.addEventListener('click', addClass);

buttonClose.addEventListener('click', removeClass);

function addClass() {
  modalBackdrop.classList.add('is-open');
}

function removeClass() {
  modalBackdrop.classList.remove('is-open');
}
