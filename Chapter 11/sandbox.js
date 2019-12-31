//Date & Time section
// store in database or comparing dates together.
// It's alot easier to use timestamps instead rather than date
// objects directly

//Date constructor to get all date
// const now = new Date();

// console.log(now);
// console.log(typeof now);

// // year, months, day, times
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now. getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// //timestamp

// console.log('timestamp:', now.getTime());

// //to date string

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

//part 2 timestamps & comparisons

// const before = new Date('February 1 2019 7:30:59');
// const now = new Date();

// // console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();

// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(days);
// console.log(`this blog was written ${days} ago`);

// // converting timestamps into date objects
// const timeStamp = 1675938474990;
// console.log(new Date(timeStamp));

//part 4
// Using Date-fns Library

const now = new Date();

console.log(dateFns.isToday(now));
