function finishForm() {
  const formEl = document.querySelector('.login-form');
  const input1 = document.createElement('input');

  input1.setAttribute('name', 'login');

  formEl.prepend(input1);
  console.dir(input1);

  const input2 = document.querySelector('input[type="text"]');
  console.dir(input2);
  input2.setAttribute('type', 'password');
  input1.setAttribute('type', 'text');
}

finishForm();
