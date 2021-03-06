const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz__form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show result on page
  scrollTo(0, 0);
  // result.querySelector('span').textContent = `${score}%`;
  result.classList.add('show-result');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

//================================================================

//Window object

//It's the global object in front end javascript. It's the mother of all
//Javascript. Everything we do we in frontend javascript is
//stores on this window object

//we dont need to type out the window because it's
//automatically inferred because it's on the global object.

//window object (global object)

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelectory('form'));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//   alert('hello, ninjas');
// }, 3000);

//===================================================================
// Intervals & Animating the scrore

// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello');
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);
