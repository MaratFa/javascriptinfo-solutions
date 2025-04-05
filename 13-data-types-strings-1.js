/*
Write a function ucFirst(str) that
returns the string str with
the uppercased first character,
for instance:

ucFirst("john") == "John";
*/

const ucFirst = (str) => str.length > 0 ? str[0].toUpperCase() + str.slice(1) : "";

alert(ucFirst("john") == "John");
