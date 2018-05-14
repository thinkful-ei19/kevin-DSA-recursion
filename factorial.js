'use strict';

function factorial(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num-1);
}

console.log(factorial(5));
// 120

// why doesnt return factorial(num * num - 1); work?