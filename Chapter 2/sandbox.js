let name = 'glenn';

let lastName = 'law';

let myAge = 32;

let fullName = `${name} ${lastName}`;

console.log(fullName);

//template string/template literal =====
console.log(`My name is ${name} ${lastName} and I am ${myAge} years old.`);

//Common string Properties
//getting characters
console.log(fullName[3]);
// string length
console.log(name.length);

//Common string methods ======
//toUpperCase
console.log(fullName.toUpperCase());
//toLowerCase
let result = fullName.toLowerCase();
console.log(result);
//lastIndexOf
let email = 'mario@thenetninja.co.uk';
let answer = email.lastIndexOf('n');
console.log(answer);
//Slice
let result2 = email.slice(0, 5);
console.log(result2);
//substr
let result3 = email.substr(0, 5);
console.log(result3);
//replace (Replaces the first character it comes and leaves the others)
let result4 = email.replace('m', 'w');
console.log(result4);

let result5 = email.replace('n', 'w');
console.log(result5);

//NUMBERS & Math Operators  =======
// +, -, *, /, **(to the power of), %(Remainder)
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

//Arrays Properties & Methods =======
let ninjas = ['ken', 'ryu', 'chun-li'];
//length property
console.log(ninjas.length);
//join method
console.log(ninjas.join(''));
//indexOf
let result6 = ninjas.indexOf('chun-li');
console.log(result6);
//concat
let result7 = ninjas.concat(['ken', 'crystal']);
console.log(result7);
//push (Alters the original value (desctructive method))
let result8 = ninjas.push('bran');
console.log(result8);
//pop (Alters the original value (destructive method))
ninjas.pop('ken');
console.log(result8);

//null & undefined ===========
let age = null;
console.log(age, age + 3, `the age is ${age}`);
//comparison operators
let theAge = 25;
console.log(theAge == 25); //true
console.log(theAge != 25); //false
console.log(theAge > 20); //true
console.log(theAge < 20); //false
console.log(theAge <= 20); //true
console.log(theAge >= 20); //true
let name1 = 'shaun';
// == is a loose comparison (different types can still be equal)
console.log(name1 == 'shaun');
console.log(name1 == 'Shaun'); //false because case sensitive
console.log(name1 > 'crystal'); //true because first character comes after C
console.log(name > 'Shaun'); //true because lowercase letters are greater than uppercase letters
console.log(name > 'Crystal'); //true because lowercase letters are great than any uppcase letters

let age2 = 25;
console.log(age2 == 25);
console.log(age2 == '25'); //converted the string into a number before it's evaluated
console.log(age2 != 25);
console.log(age2 != '25');

//strict comparison (different types cannot be equal)

console.log(age2 === 25);
console.log(age2 === '25');

//type conversion
let score = '100';
score = Number(score);
console.log(score + 1);

//turn a variable into a string
let result9 = String(score);
console.log(result9);

//check the variable with typeof operator
console.log(typeof score);

//turn a variable into a boolean
let result10 = Boolean(100);
console.log(result10, typeof result10);

let result11 = Boolean(0);
console.log(result11, typeof result11);

let result12 = Boolean('0'); //Strings of any length except no length are all truthy.
console.log(result12, typeof result12);
