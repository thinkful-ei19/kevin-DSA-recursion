'use strict';

function stringSplitter(string, separator) {
  const pointer = string.indexOf(separator);
  if (pointer === -1) {
    return [string];
  }
  return [string.slice(0, pointer)].concat(stringSplitter(string.slice(pointer + separator.length)));
}

console.log(stringSplitter('hello world', ' '));
// output => 'hello' 'world'