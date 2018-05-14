'use strict';

function sheepCounter(input) {
  if (input === 0) {
    return console.log('no more sheep over the fence');
  }

  console.log(input + ' sheep over the fence');
  sheepCounter(input -1);
}

sheepCounter(3);