// //====================================
// Objects at a Glance
// How to create individual objects using object literal notation
//Object Literals

//Key: Value (can be any data type)

let user = {
  name: 'Glenn',
  age: 32,
  email: 'Glenn@me.com',
  location: 'brooklyn',
  blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

// Can use Dot notation or bracket notation to see
// or change info in an object

// dot notation
console.log(user.name);
// user.age = 33;
console.log(user.age);

//scare bracket notation

console.log(user['email']);
// user['name'] = 'mike';
console.log(user['name']);

console.log(typeof user);

//Adding Methods to an Object
// this keyword (context object)

// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 40 }
// ];

// console.log(blogs);

let user2 = {
  name: 'Glenn',
  age: 32,
  email: 'Glenn@me.com',
  location: 'brooklyn',
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 40 }
  ],
  login() {
    console.log('user logged in');
  },
  logout() {
    console.log('user logged out');
  },
  logBlogs() {
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  }
};

// Looks like a method (Methods are functions defined on an object)

user2.login();
user2.logout();
user2.logBlogs();

//=====================================
// Math Objects Properties and methods

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

//=================================================

// Primitive and Reference types
/* Primitive Types
Numbers, Strings, Booleans, null, undefine, symbols*/

/*reference types
all types of objects, object literals ,arrays, functions, dates, all other objects*/

//Stack & Heap

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.age = 40;

console.log(userOne, userTwo);
