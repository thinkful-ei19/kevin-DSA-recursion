'use strict';

function binary(num) {
  if (num < 1) {
    return '';
  }
  return binary(Math.floor(num / 2)) + (num % 2);
}

console.log(binary(25));
// 11001