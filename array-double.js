'use strict';

function arrayDouble(arr) {
  if (!arr.length) {
    return [];
  }
  const newNum = arr[0] * 2;
  return [newNum, ...arrayDouble(arr.slice(1))];
}

console.log(arrayDouble([1, 2, 3]));
//output => [2, 4, 6]