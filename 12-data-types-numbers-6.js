/*
A random integer from min to max

Create a function randomInteger(min, max)
that generates a random integer number
from min to max including both min and
max as possible values.

Any number from the interval min..max
must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
