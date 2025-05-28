/*
Calling in an array context

What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/


"a,b,function(){...}"
