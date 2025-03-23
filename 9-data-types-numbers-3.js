/*
Repeat until the input is a number

Create a function readNumber which
prompts for a number until the visitor
enters a valid numeric value.

The resulting value must be returned
as a number.

The visitor can also stop the process
by entering an empty line or pressing
“CANCEL”. In that case, the function
should return null.
*/

function readNumber() {
  let num = prompt("Enter a number please", 0);
  if (num == "" || num == null) {
    alert(`Read: ${null}`);
  } else if (isFinite(num)) {
    alert(`Read: ${num}`);
  } else {
    readNumber();
  }
}

readNumber();