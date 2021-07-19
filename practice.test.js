const str = require('./practice.js');

test('Character count', () => {
  expect(str.strLng('hola')).toBe(4);
})

test('Character count', () => {
  expect(str.strLng('another')).toBe(7);
})


test('Character count (no characters)', () => {
  expect(() => str.strLng('').toThrow(''));
})

test('Character count (no characters)', () => {
  expect(() => str.strLng('extra long string that shouldnt be here')
  .toThrow(''));
})

test('Str reverse 1', () => {
  expect(str.strReverse('hola')).toBe('aloh');
})

test('Str reverse 2', () => {
  expect(str.strReverse('Another')).toBe('rehtonA');
})

describe('Capitalize function', () => {
  test('Capitalize 1', () => {
    expect(str.capitalize('hello')).toBe('Hello');
  })

  test('Capitalize 2', () => {
    expect(str.capitalize('another')).toBe('Another');
  })

  test('Capitalize 3 (Capital letter)', () => {
    expect(str.capitalize('Battle')).toBe('Battle');
  })

  test('Capitalize 4 (Integers)', () => {
    expect(() => str.capitalize('254').toThrow());
  })

  test('Capitalize 4 (Integers)', () => {
    expect(() => str.capitalize('master34').not.toThrow());
  })

  test('Capitalize 5 (Integers 2)', () => {
    expect(str.capitalize('master34')).toBe('Master34');
  })
})