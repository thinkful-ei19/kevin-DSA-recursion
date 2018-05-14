'use strict';

function triNum(n) {
  if (n <= 1) {
    return n;
  }
  return n + triNum(n-1);
}

console.log(triNum(4));