class Calc {

  add = (a, b) => a + b;

  substract = (a, b) => a - b;

  mult = (a, b) => a * b;

  divide = (a, b) => {
  if (b === 0) { return undefined }
  return a / b;
  };

}

const calc = new Calc();
module.exports = calc;