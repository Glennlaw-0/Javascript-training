//Date & Time section
// store in database or comparing dates together.
// It's alot easier to use timestamps instead rather than date
// objects directly

//Date constructor to get all date
const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//timestamp

console.log('timestamp:', now.getTime());

//to date string

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
