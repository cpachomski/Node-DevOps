const isPrime = require('./isPrime')

test('isPrime is working', () => {
  expect(isPrime(997)).toBe(true)
  expect(isPrime(103217)).toBe(true)
  expect(isPrime(4)).toBe(false)
})
