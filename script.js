const submitButton = document.querySelector('button');
const dialog = document.getElementById('success-dialog');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission for this example
  dialog.style.display = 'block';
});
