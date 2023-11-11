
document.addEventListener('DOMContentLoaded', (e) => {
  
  const form = document.querySelector('#login-form');
  console.log(form);
  form.addEventListener('submit', (e) => {
    console.log('form submitted');
    e.preventDefault();
    // ideally check db for correct username and pw and if we have a match, then route
    window.location.href = '/';
  });

});