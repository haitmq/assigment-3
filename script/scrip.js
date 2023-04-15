'use strict';
// xac dinh phan tu xu ly
let btnEmailCheck = document.getElementById('btn-email-check');
let infoForm = document.querySelector('.info-form');
let infoContainer = document.querySelector('.info-container');
let emailUser = document.getElementById('email-user');
let message = document.querySelector('.message');
let emailExmple = document.querySelector('.emailExample');
// regex
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btnEmailCheck.addEventListener('click', function () {
  let emailValue = emailUser.value;
  if (regex.test(emailValue.toLowerCase())) {
    infoForm.classList.add('hidden');
    infoContainer.classList.remove('hidden');
  } else {
    message.classList.add('invalid');
    message.textContent = 'Vui lòng nhập email.';
  }
});
emailUser.addEventListener('focus', function () {
  emailExmple.classList.remove('hidden');
});
emailUser.addEventListener('blur', function () {
  emailExmple.classList.add('hidden');
});

// job info hidden
let infoUl = document.querySelectorAll('.show-item');
let viewMore = document.querySelectorAll('.viewMore');
let viewLess = document.querySelectorAll('.viewLess');
let gridTitle = document.querySelectorAll('.grid-item h1');

const showElement = function (ele) {
  ele.classList.remove('hidden');
};

const hideElement = function (ele) {
  ele.classList.add('hidden');
};

for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener('click', function () {
    infoUl[i].classList.remove('hidden');
  });
}
