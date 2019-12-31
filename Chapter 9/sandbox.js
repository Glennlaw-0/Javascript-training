//===============================
// Five Array Methods

//1. Filter Method .filter()
// Filter Method iterates an array and performs a check on each item
// in that array inside a callback function.
// Filter method is non-destructive. does not alter original array.

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//   return score > 20;
// });

// console.log(filteredScores);

const users = [
  { name: 'shaun', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chun-li', premium: true }
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);

//===========================================
//2. Map Method .map()
// Map Method takes an array and maps it into a completely new array
// iterates an array and returns an updated value for each value in an array.
//non destructive method

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => price / 2);

// console.log(salePrices);

const products = [
  { name: 'gold star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 }
];

const saleProducts = products.map(product => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts);

//==================================================
// 3. Reduce Method
// Returns any single value that you want based on the values in the array
//that is iterated over
// reduce method has two arguments a callback function and
// the second argument is the initial value for the accumulator

// const scoresTwo = [10, 20, 60, 40, 70, 90, 30];

// const result = scoresTwo.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }

//   return acc;
// }, 0);

// console.log(result);

const scores = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 }
];

const marioScores = scores.reduce((accu, curr) => {
  if (curr.player === 'mario') {
    accu += curr.score;
  }
  return accu;
}, 0);

console.log(marioScores);

//==========================================================
// 4. Find Method
// Returns the value of the first element inside an array that
// passes a certain test in a callback function

//lets find the first score in the array that is over 50

const scoresTwo = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scoresTwo.find(score => score > 50);

console.log(firstHighScore);

//=============================================================
// 5. Sort Method
// may want to sort an array in alphabetical order
// may want to sort them based on the property
// Destructive method. Alters the original array you use the method on

//example 1 - sorting strings

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
console.log(names);

// example 2 - sorting numbers using parameters a,b

const scoresThree = [10, 50, 20, 5, 35, 70, 45];

scoresThree.sort((a, b) => b - a);

console.log(scoresThree);

//example 3 - sorting objects

const playersTwo = [
  { name: 'mario', score: 20 },
  { name: 'luigi', score: 10 },
  { name: 'chun-li', score: 50 },
  { name: 'yoshi', score: 30 },
  { name: 'shaun', score: 70 }
];

// playersTwo.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

playersTwo.sort((a, b) => b.score - a.score);

console.log(playersTwo);

//for more complex sorting you must use a function as a argument
//"compare function"

// reverse method .reverse() turning values in reverse

//==================================================================
// 6. Chainging Arrays together

const productsTwo = [
  { name: 'gold star', price: 30 },
  { name: 'green shell', price: 10 },
  { name: 'red shell', price: 40 },
  { name: 'banana skin', price: 5 },
  { name: 'mushroom', price: 50 }
];

//1. filter method

//2. filter product array, map it to a new array (product name with a sale price)

// const filtered = productsTwo.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//   return `the ${product.name} is ${product.price / 2} dollars`;
// });

const promos = productsTwo
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price / 2}`);

console.log(promos);
