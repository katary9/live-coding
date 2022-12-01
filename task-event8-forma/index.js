// нашли нужные эллементы на странице

const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const emailErrEl = document.querySelector('.error-text_email');
const passwordErrEl = document.querySelector('.error-text_password');

// проверка есть ли значение пароля в строке то пропускаем элеммент с ошибкой, так же проверка на эмейл есть ли @

const isRequired = value => value 
? undefined
: 'Required';

const isEmail = value => value.includes('@')
? undefined
: 'Should be an email';

// валидатор обьект:

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired]
};

const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

// сами функции 

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrEl.textContent = errorText;

}

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    passwordErrEl.textContent = errorText;
}

// задаем обработчики

emailEl.addEventListener('input', onEmailChange);
passwordEl.addEventListener('input', onPasswordChange);

// получаем элемент родителя форму :

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
    .reduce((acc, [field, value]) => ({...acc, [field]: value}), {});

    alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);

// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
// const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//  const prop = formField[0]; // здесь "name" инпута
//  const value = formField[1]; // здесь "value" инпута
  // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
  // const [prop, value] = formField;
//  return {
    // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
 //   ...acc,
    // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//    [prop]: value,
//  };
//}, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));
