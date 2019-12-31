// ================
//submit events

//When we're listening for a submit event.
//We do not attach event listening to submit button

//ATTACH THE FORM! THE FORM IS BEING SUBMITED NOT THE BUTTON!
//1 to pull data from field is using querySelector
//2 second way to get data is to use reference from ID (form.username.value)

const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value);
  // form.username.value;

  //Validation goes inside of this event function
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = 'Username is valid';
  } else {
    //feedback help info
    feedback.textContent =
      'Username must contain letters between 6 & 12 characters long';
  }
});

//Want users to use values to match certain patterns
//contain only numbers and letters
//Regular expressions or REGEX

// const username1 = 'shaunp';

// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username1);

// if (result) {
//   console.log('regex test passed');
// } else {
//   console.log('regex test failed');
// }

//regex matches at 0 because Javascript is zero based.
//We specify it to be 0 because we want a match at the start of
//the string '^'
//returns an integer (-1 no match) (0 for a match)
// let result1 = username1.search(pattern);
// console.log(result1);

//=====================================
//KEYBOARD EVENTS

//event listener for live feedback

form.username.addEventListener('keyup', e => {
  console.log(e);
  //two different ways of getting the value
  //e.target.value is a perferable way
  //just in case you might change the form
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'danger');
  }
});
