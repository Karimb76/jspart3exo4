document.getElementsByTagName('button')[0].addEventListener('click', function(){
  if (password.value == confirmPassword.value) {
  document.getElementById('password').style.border = '2px solid green';
  document.getElementById('confirmPassword').style.border = '2px solid green';

  }

  else {
  document.getElementById('password').style.border = '2px solid red';
  document.getElementById('confirmPassword').style.border = '2px solid red';

  }
}
)
