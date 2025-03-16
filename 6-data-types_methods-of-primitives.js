/*
Can I add a string property?
Consider the following code:
  let str = "Hello";
  str.test = 5;
  alert(str.test);
What do you think, will it work? What will be shown?
*/

/*
undefined
with 'use strict' : Cannot create property 'test' on string 'Hello'
*/