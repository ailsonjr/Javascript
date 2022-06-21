const prompt = require('prompt-sync')();

console.log('\nWelcome! In this App, the age difference between two people will be calculated, enter the information as requested \n');

let olderPersonName = prompt('Enter the older person\'s name: ');
let olderPersonAge = prompt('Enter the age of the older person: ');
let youngerPersonName = prompt('Enter the name of the younger person: ');
let youngerPersonAge = prompt('Enter the age of the younger person: ');

let ageDifference = olderPersonAge - youngerPersonAge;

console.log('');
console.log(`The older person's name is ${olderPersonName} and your age is ${olderPersonAge} years old.`);
console.log(`The younger person's name is ${youngerPersonName} and your age is ${youngerPersonAge} years old.`);
console.log(`The age difference between them is ${ageDifference} years`);
