/*
  Modify the code of up, down, and showStep to make the calls chainable, like this:

  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep(); 