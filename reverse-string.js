'use strict';

function reverseString(string) {
  if (!string.length) {
    return '';
  }

  const char = string[string.length - 1];
  return char + reverseString(string.slice(0, string.length - 1));
}

console.log(reverseString('kevin'));
// output => 'nivek'