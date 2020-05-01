const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('span.validation');
const submit = document.getElementById('submit');
const icon = document.getElementById('icon-error');
email.addEventListener('input', function (event) {
 
  if(email.validity.valid) {
    emailError.innerHTML = ''; 
    emailError.className = 'validation'; 
    email.className = 'is_correct';
    submit.className = 'active';
    icon.className = '';
  }  else {
    showError();
  }
  if(email.value == ""){
    submit.className = '';
    email.className = '';
    icon.className = '';
  }
});

form.addEventListener('submit', function (event) {
    if(!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    emailError.innerText = 'No parece un correo electrónico';
  } else if(email.validity.typeMismatch) {
    emailError.innerText = 'No parece un correo electrónico';
  }
  emailError.className = 'validation is_error';
  email.className = 'is_error';
  submit.className = 'no_active';
  icon.className = 'show';
}