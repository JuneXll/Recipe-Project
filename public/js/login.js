// Login form handler
const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    console.log(email);
    const password = document.querySelector('#password-login').value.trim();
    console.log(password);

    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

// Sign up for handler
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-newAccount");
  const email = document.querySelector("#email-newAccount");
  const password = document.querySelector("#password-newAccount")

  if(name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers: { 'Content-Type': 'application/json'},
    });

    if(!response.ok){
      console.log(response);
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".newAccount-form").addEventListener('submit',signupFormHandler);