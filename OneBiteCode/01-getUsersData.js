const prompt = require('prompt-sync')();

console.log('\nWelcome! Next, we will ask you to provide some data: \n');
let name = prompt('Please enter your name: ');
let age;
console.log('');
do {
  age = prompt('Now enter your age: ');
  confirmation = prompt(`Is your age ${age} years old? Enter 1 to confirm or 2 to correct: `);
  console.log('');
} while (confirmation != 1);

console.log(`Your name is ${name}. \nYour age is ${age} years old.`);
