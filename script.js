let createButton = document.querySelector('button');
let errorParagraph = document.querySelector('.error');

createButton.addEventListener('click', () => {
  let password = document.getElementById('password1').value;
  let password2 = document.getElementById('password2').value;

  if (password !== password2) {
    errorParagraph.textContent = '*Passwords do not match*';
  }
});
