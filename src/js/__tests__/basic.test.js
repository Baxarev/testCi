import getHealtStatus from '../basic';

test.each([
  ['Маг', 90, 'healthy'],
  ['Маг', 51, 'healthy'],
  ['Маг', 50, 'wounded'],
  ['Маг', 10, 'critical'],
])('testing getHealtStatus', (name, health, expected) => {
  const result = getHealtStatus({ name, health });
  expect(result).toBe(expected);
});

console.log(getHealtStatus)