const prompt = require('prompt-sync')();

console.log('\nWelcome to the ship\'s navigation system \nEnter the requested data\n');

let shipSpeed = 0;
let pilotName = prompt('Pilot name: ');
let accelerate, incrementDecrement;

do {
  do {
    incrementDecrement = prompt('Do you want to increase\(+\) or decrease\(-\) the speed: ');
    accelerate = parseInt(prompt('How much do you want to change the speed: '));
    confirmation = prompt(`Do you want to change the ship's speed by ${accelerate} km/s more? Enter 1 to confirm or 2 to correct: `);
    console.log('');
  } while (confirmation != 1);

  if (incrementDecrement === '+') {
    shipSpeed += accelerate;
  } else {
    shipSpeed -= accelerate;
  }

  if (shipSpeed <= 0) {
    console.log('Ship is stopped. Consider departing and increasing speed.');
  } else if (shipSpeed < 40) {
    console.log('You\'re slow, we can speed up more.');
  } else if (shipSpeed < 80) {
    console.log('Seems like a good speed to keep.');
  } else if (shipSpeed < 100) {
    console.log('High speed. Consider decreasing.');
  } else {
    console.log('Dangerous speed. Forced automatic control.');
  }

  console.log(`\nPilot name: ${pilotName}\nShip Speed: ${shipSpeed} km/s\n`);
  progress = prompt('Do you want to continue using the navigation system? Enter 1 to continue or 2 to finish: ');
} while (progress != 2);

console.log('\nTurning off the navigation system. Have a good trip!');
