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
  // Отменяем стандартное поведение формы
  event.preventDefault();

  // Получаем данные из формы
  const formData = new FormData(form);

  // Отправляем данные на сервер
  fetch('https://course-front-six.vercel.app/mail.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      // Обрабатываем ответ от сервера
      console.log(response);
    })
    .catch((error) => {
      // Обрабатываем ошибку
      console.error(error);
    });
});

// const formElement = document.getElementById('form');
// formElement.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let data = {
//     name: nameInput.value,
//     phone: input.value,
//     email: emailInput.value,
//   };

//   let response = fetch('mail.php', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   });

// });

//   alert(result);
//   // const phone = input.value;
//   // const name =  nameInput.value;
//   // const email = emailInput.value;
//   // console.log(name, phone, email);let result = response.text();
