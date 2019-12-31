// Javascript and the DOM
//DOM
// Add, change & delete content
// Make a cool pop-up effect in the webpage

//querying the dom

//querySelector

// const para = document.querySelector('p');

// console.log(para);

// const para1 = document.querySelector('.error');

// console.log(para1);

// const para2 = document.querySelector('div.error');

// console.log(para2);

// //querySelectorAlL

// const paras = document.querySelectorAll('p');

// console.log(paras);

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// //get an element by ID

// const title = document.getElementById('page-title');
// console.log(title);

// //get an element by class

// const errors2 = document.getElementsByClassName('error');
// console.log(errors2);

// //get an element by class

// const error3 = document.getElementsByTagName('p');
// console.log(error3);

// //Changing text inside elements

// const para3 = document.querySelector('p');

// console.log(para3.innerText);

// para3.innerText = 'Ninjas are awesome';

// const paras1 = document.querySelectorAll('p');

// paras1.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// });

//innerHTML

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// content.innerHTML += `<h2> This is a new H2</h2>`;

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

//Getting & Setting attributes

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNet Ninja website';

// const mssg = document.querySelector('p');

// console.log(mssg.setAttribute('class', 'success'));

//===============================================
// Changing Css styles

// const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);

// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';

// title.style.fontSize = '1.6rem';

// title.style.margin = '';

//===============================================
//add and remove or Toggle classes from elements classList

// const content = document.querySelectorAll('p');

// console.log(content.classList);

// content.classList.add('success');
// content.classList.remove('error');

// content.forEach(p => {
//   if (p.textContent.includes('success')) {
//     p.classList.add('success');
//   } else if (p.textContent.includes('error')) {
//     p.classList.add('error');
//   }
// });

// const header = document.querySelector('h1');

// header.classList.add('success');

// header.classList.toggle('success');
// header.classList.toggle('success');

//===================================================
//================= Parents, children & siblings

//1 make a query for the article

//use children property to give us all the children in a single collection

// const article = document.querySelector('article');

//children property
//cannot use forEach on htmlcollection only on nodelist or array

// console.log(article.children);

//take an htmlcollection and convert it into an array
// converting to an Array is not desctructive, it returns a new value

// console.log(Array.from(article.children));
// console.log(article.children);

//now to add a class to children of parent element

// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });

//doing it backwards

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //chaining
// console.log(title.nextElementSibling.parentElement.children);

//================================================================
// Events Basics (click events) react to a user clicking the button
//1 Query the dom where we expect the event to happen (the button)
//2 add an event listener to the element (actively listens to user events with a specific element)
//3 write a call back function that will fire when user clicks on the button

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you click me');
// });

// const list = document.querySelectorAll('li');

// list.forEach(eachLi => {
//   eachLi.addEventListener('click', e => {
//     console.log('item clicked');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(eachLi);
//     e.target.style.textDecoration = 'line-through';
//   });
// });

//===========================================================
//creating and removing elements
// use method .creatElement();

// const ul = document.querySelector('ul');

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   // console.log('you click me');
//   // ul.innerHTML += '<li>something new</li>';
//   const li = document.createElement('li');
//   li.textContent = 'something new to do';
//   // ul.append(li); --- Goes to the bottom
//   ul.prepend(li);
// });

//removing method used on UL
// ul.remove();

//how to delete li's from the dom on click event listener

// const list = document.querySelectorAll('li');

// list.forEach(eachLi => {
//   eachLi.addEventListener('click', e => {
//     console.log('item clicked');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(eachLi);
//     // e.target.style.textDecoration = 'line-through';
//     e.stopPropagation();  // <============ stop propogation
//     e.target.remove();
//   });
// });

//========================================================
//event bubbling (and delegation)
// event occures look for event targets..
// bubbles up the dom to parent to see if there is an event listener
// use method called stop propogation

//event bubbling and event delgation with using target.tagName

// ul.addEventListener('click', e => {
//   // console.log('event in ul');
//   if (e.target.tagName === 'LI') {
//     e.target.remove();
//   }
// });

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//   console.log('OI! my content is copyright!');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//   // console.log(e);
//   //console.log(e.offsetX, e.offsetY);
//   box.textContent = `x position - ${e.offsetX} y position - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//   console.log(e.pageX, e.pageY);
// });

//===============================================
// Building a pop up

const button = document.querySelector('button');

const popupWrapper = document.querySelector('.popup-wrapper');

const popupClose = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popupWrapper.style.display = 'block';
});

popupClose.addEventListener('click', () => {
  popupWrapper.style.display = 'none';
});

popupWrapper.addEventListener('click', () => {
  popupWrapper.style.display = 'none';
});
