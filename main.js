const errorMsg = document.querySelector('#error-msg');
const validMsg = document.querySelector('#valid-msg');
const errorMap = [
  'Неправильный номер',
  'Неверный код страны',
  'Слишком короткий',
  'Слишком долинный',
  'Неправильный номер',
];
const iti = window.intlTelInput(input, {
  utilsScript: '/intl-tel-input/js/utils.js?1687509211722',
});
const reset = () => {
  input.classList.remove('error');
  errorMsg.innerHTML = '';
  errorMsg.classList.add('hide');
  validMsg.classList.add('hide');
};

input.addEventListener('blur', () => {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove('hide');
    } else {
      input.classList.add('error');
      const errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove('hide');
    }
  }
});
const emailInput = document.querySelector('#email');
const emailInputresult = document.querySelector('#result');
emailInput.addEventListener('input', (e) => {
  const emailInputValue = e.currentTarget.value;
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
    emailInputresult.textContent = 'Неправильный E-mail';
  } else {
    emailInputresult.textContent = '';
  }
});
const nameInput = document.querySelector('#name');
const myForm = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);

  fetch('https://course-front-six.vercel.app/mail.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      for (let entry of response.headers.entries()) {
        console.log(entry);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// const formElement = document.getElementById('form');

//   // const phone = input.value;
//   // const name =  nameInput.value;
//   // const email = emailInput.value;
//   // console.log(name, phone, email);
