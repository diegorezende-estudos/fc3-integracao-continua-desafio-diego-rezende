const subtrair = require('./sub');

test('subtração de 10 - 5 deve ser 5', () => {
  expect(subtrair(10, 5)).toBe(5);
});