/* Is it possible to create functions A and B so that new A() == new B()?

  function A() { ... }
  function B() { ... }

  let a = new A();
  let b = new B();

  alert( a == b ); // true

  If it is, then provide an example of their code.
*/

  const object = {a: 1};
  
  function A() { return object};
  function B() { return object};

  let a = new A();
  let b = new B();

  console.log(a == b); 
