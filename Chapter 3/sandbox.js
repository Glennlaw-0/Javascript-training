//for loops ==========
// for (let i = 0; i < 5; i++) {
//   console.log('in loop', i);
// }
const name = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < name.length; i++) {
  //   console.log(i, name[i]);

  let html = `<div>${name[i]}</div>`;
  console.log(html);
}

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log('your score', scores[i]);

  if (scores[i] === 100) {
    console.log('congrats, you got the top score!');
    break;
  }
}

//while loops ========

// let i = 0;
// while (i < 5) {
//   console.log('in loop:', i);
//   i++;
// }

let i = 0;
while (i < name.length) {
  console.log(i, name[i]);
  i++;
}

//do while loops

let j = 2;
do {
  console.log('val of j is: ', j);
  j++;
} while (j < 5);

//conditional
//if statements

const age2 = 25;

if (age2 > 20) {
  console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
  console.log("That's alot of ninjas");
}

const password = 'hungryh';

if (password.length >= 12) {
  console.log('that password is mighty strong');
} else if (password.length >= 8) {
  console.log('that password is decent');
} else {
  console.log(' password is not long enough');
}

// if (password.length >= 8) {
//   console.log('that password is long enough!');
// } else {
//   console.log(' password is not long enough');
// }

// Logical operators - OR || and AND &&
if (password.length >= 12 && password.includes('@')) {
  console.log('that password is mighty strong');
} else if (password.length >= 8) {
  console.log('that password is decent');
} else {
  console.log(' password is not long enough');
}

//Logical NOT (!)
let user = false;
if (!user) {
  console.log('you must be logged in to continue');
  //switched what user is inside the brackets with (!)
}

//variables & block scope (the same rules apply to const as let)
let age3 = 30;
//global scope (can be accessed inside code block and outside code block)

/* let age3 = 50; (cannot redefine variable
again because its been declared in the same scope )*/

if (true) {
  let age3 = 40;
  //(we are able to redefine variable within the code block with same name)
  //(created a local scope of age3 inside code block)

  let name = 'shaun';
  console.log('first code block:', age3, name);

  if (true) {
    let age3 = 50;
    console.log('second code block: ', age3);
  }
}

console.log('outside code block: ', age3);

// var ignores block scope!!
