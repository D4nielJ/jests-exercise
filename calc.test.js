const calc = require('./calc');

describe('Add feature', () => {
  test('Addition 1', () => {
    expect(calc.add(1, 2)).toBe(3);
  })

  test('Addition 2', () => {
    expect(calc.add(2, 3)).toBe(5);
  })
});

describe('Substraction feature', () => {
  test('Substraction 1', () => {
    expect(calc.substract(1, 2)).toBe(-1);
  })

  test('Substraction 2', () => {
    expect(calc.substract(5, 3)).toBe(2);
  })
});

describe('Multiply feature', () => {
  test('Multiply 1', () => {
    expect(calc.mult(1, 2)).toBe(2);
  })

  test('Multiply 2', () => {
    expect(calc.mult(5, 3)).toBe(15);
  })
});

describe('Division feature', () => {
  test('Divide 1', () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  })

  test('Divide 2', () => {
    expect(calc.divide(9, 3)).toBe(3);
  })

  test('Divide 3 (Divide by 0 expect to be undefined)', () => {
    expect(calc.divide(9, 0)).toBeUndefined();
  })
});