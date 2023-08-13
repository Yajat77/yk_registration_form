const submitButton = document.querySelector('button');
const dialog = document.getElementById('success-dialog');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  dialog.style.display = 'block';
});
