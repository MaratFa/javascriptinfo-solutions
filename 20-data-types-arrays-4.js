/*
Sum input numbers

Write the function sumInput() that:

Asks the user for values using prompt
and stores the values in the array.
Finishes asking when the user enters
a non-numeric value, an empty string,
or presses “Cancel”.
Calculates and returns the sum of array
items.
P.S. A zero 0 is a valid number, please
don’t stop the input on zero.
*/

function sumInput() {
  const arr = [];
  let sum = 0;
  
  while (true) {
    let val = prompt("Please enter a number", 0);
    if (val === null || val.trim() === "" || isNaN(+val)) break;
    arr.push(+val);
  }
  
  for (let num of arr) sum += num;
  
  return sum;
}

alert(sumInput());
