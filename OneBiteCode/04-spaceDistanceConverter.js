const prompt = require('prompt-sync')();

console.log('\nSpatial distance converter program. Put a distance in light years(l.y.) and convert to a desired unit.\n');
let distance = parseInt(prompt('Distance in light years: '));
let convertedDistance, desiredConversation;

do {
  console.log('\nWhat unit do you want to convert to:\n1 - Parsec(pc)\n2 - Astronomical Unit(AU)\n3 - Kilometers(km)\n');
  let unit = prompt('Enter the desired option number: ');

  switch (unit) {
    case '1':
      convertedDistance = `${distance * 0.3006601} pc`;
      desiredConversation = 'Parsec';
      optinValid = true;
      break;
    case '2':
      convertedDistance = `${distance * 634241.1} AU`;
      desiredConversation = 'Astronomical Unit';
      optinValid = true;
      break;
    case '3':
      convertedDistance = `${distance * Math.pow(10, 12)} km`;
      desiredConversation = 'Kilometers';
      optinValid = true;
      break;
    default:
      console.log('You did not enter a valid option, please enter one of the options');
      optinValid = false
      break;
  }
} while (optinValid === false);

console.log(`\nDistance in light years: ${distance} l.y.\n${desiredConversation}: ${convertedDistance}`);
