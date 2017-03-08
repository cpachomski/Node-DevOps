'use strict'

//returns if a value is prime or not
module.exports = function(int) {
  if (int < 1) { return false }

  for (let i = 2; i < int; i++) {
    if (int % i == 0) { return false }
  }

  return true
}
