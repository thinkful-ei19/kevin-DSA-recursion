'use strict';

function anagram(word) {
  if (word.length === 0) {
    return [word];
  }
  for (let i = 0; i < word.length; i++) {
    const firstLetter = word[i];
    const otherLetters = word.substr(0, i) + word.substr(i + 1);
    console.log(firstLetter + anagram(otherletters));
  }
}

console.log(anagram('east'));