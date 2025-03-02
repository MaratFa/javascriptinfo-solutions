let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  for (let prop in menu) {
    if (typeof menu[prop] === "number") menu[prop] *= 2;
  }
};
  
multiplyNumeric(menu);
  
console.log(menu);
