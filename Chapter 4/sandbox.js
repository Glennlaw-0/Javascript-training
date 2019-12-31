//===========================================================
// FUNCTIONS!!!

/* functions allow us to define a block of code that 
we can call to execute whenever we want */

greet();
greet();
greet();

//function declaration - HOISTING HAPPENS WITH FUNCTION DECLARATIONS
/*You can call a function before declaring it, 
the function define/delcared will be hoisted to the top of the js file */

function greet() {
  console.log('hello there');
}

//=========================================================

//function expression (store a function inside a variable)
//HOISTING DOES NOT HAPPEN WITH FUNCTION EXPRESSIONS
/*function expressions bust be defined before calling them */
const speak = function() {
  console.log('gooday');
};

speak();
speak();
speak();

//===========================================================
//arguments & parameters

//parameters
const talk = function(name = 'luigi', time = 'night') {
  console.log(`good ${name} ${time}`);
};

//arguments
talk();

//===========================================================

//returning values
const calcArea = function(radius) {
  return 3.14 * radius ** 2;
};

const area = calcArea(5);
console.log(area);

// const calcVol = function(area) {};

// calcVol(area);

//===========================================================
// Arrow Functions!!! If you have more than one parameter
// or no parameter you must use ()

const calcArea1 = radius => {
  return 3.14 * radius ** 2;
};

const area1 = calcArea1(5);
console.log(area1);

//A SIMPLER WAY TO GET A SINGLE RETURN VALUE

const calcArea2 = radius => 3.14 * radius ** 2;

const area2 = calcArea2(5);
console.log(area2);

// ARROW FUNCTIONS PRACTICE
// -- regular function code

// const greet3 = function() {
//   return 'hello world';
// };

// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

//Arrow function code
const greet4 = () => 'hello world';

const result = greet4();
console.log(result);

//================================

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));

//=====================================================
// functions & methods

const name = 'shaun';

//FUNCTIONS
const greet5 = () => 'hello';

let resultOne = greet5();
console.log(resultOne);

//METHODS

let result6 = name.toUpperCase();
console.log(result6);

//========================================================
//Callbacks & foreach

const myFunc = callbackFunc => {
  //do something
  let value = 50;
  callbackFunc(value);
};

//==== regular callback function
// myFunc(function(value) {
//   console.log(value);
// });

//===== Arrow call back function
myFunc(value => console.log(value));

//============================================================
// forEach Method

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//==============================================================
//Get a reference to the 'ul'
const ul = document.querySelector('.people1');

const people1 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people1.forEach(person => {
  //create html template for each person
  html += `<li style="color:purple"> ${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
