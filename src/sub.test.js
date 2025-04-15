const {
  sub,
  subThree,
  subFour,
  subFive,
  subSix,
  subSeven
} = require('./sub');

test('subtração de 10 - 5 deve ser 5', () => {
  expect(sub(10, 5)).toBe(5);
});

test('subtração de 10 - 5 - 1 deve ser 4', () => {
  expect(subThree(10, 5, 1)).toBe(4);
});

test('subtração de 20 - 5 - 3 - 2 deve ser 10', () => {
  expect(subFour(20, 5, 3, 2)).toBe(10);
});

test('subtração de 30 - 5 - 3 - 2 - 1 deve ser 19', () => {
  expect(subFive(30, 5, 3, 2, 1)).toBe(19);
});

test('subtração de 40 - 5 - 3 - 2 - 1 - 1 deve ser 28', () => {
  expect(subSix(40, 5, 3, 2, 1, 1)).toBe(28);
});

test('subtração de 50 - 5 - 3 - 2 - 1 - 1 - 1 deve ser 37', () => {
  expect(subSeven(50, 5, 3, 2, 1, 1, 1)).toBe(37);
});