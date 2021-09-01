/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
// Challenge questions can be found at csbin.io/callbacks

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return `${word}s`;
}

// uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4

const numberList = [1, 2, 3, 4];

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
}

forEach(numberList, addTwo);
// console.log(numberList);

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  const output = [];
  forEach(array, (i) => output.push(callback(i)));
  return output;
}

// console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6

const nums = [4, 2, 3];
const add = function (a, b) {
  return a + b;
};

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;

  forEach(array, (element) => {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
}

// console.log(reduce(nums, add, 0));

// Challenge 7

function intersection(...arrays) {
  function match(current, next) {
    const filtered = [];

    forEach(current, (elementOfA) => {
      if (next.includes(elementOfA)) {
        filtered.push(elementOfA);
      }
    });

    return filtered;
  }

  return reduce(arrays, match, arrays[0]);
}

// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );
// should log: [5, 15]

// Challenge 8
function union(...arrays) {
  // joins the arrays
  const newArray = arrays[0].concat(...arrays);

  // checks if an array includes an element, if not it adds that element to the array and returns the array
  function comparison(current, element) {
    if (!current.includes(element)) {
      current.push(element);
    }
    return current;
  }

  return reduce(newArray, comparison, arrays[0]);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// reduce(newArray, comaprison, arrays[0]) {
//   let accumulator = [5, 10, 15];
//
//   COMPARES EVERY ELEMENT OF CONXAT ARRAY WITH FIRST ARRAY AND PUSHES TO IT IF NOT PRESENT ALREADY
//   forEach(newArray, (element) => {
//     accumulator = comparison(accumulator, element);
//   });
//   return accumulator;
// }

// Challenge 9
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const composedObject = {};

  forEach(arrVals, (value) => {
    composedObject[value] = [];
  });

  forEach(arrCallbacks, (callback) => {
    const keys = Object.keys(composedObject);
    forEach(keys, (key) => {
      composedObject[key].push(callback(key));
    });
  });

  return composedObject;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function (str) {
//         return str.toUpperCase();
//       },
//       function (str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function (str) {
//         return str + str;
//       },
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.

// Challenge 11
function objectFilter(obj, callback) {
  const manipulatedObject = {};
  const keys = Object.keys(obj);

  forEach(keys, (key) => {
    manipulatedObject[key] = "";
    manipulatedObject[key] = callback(obj[key]);
  });

  return manipulatedObject;
}

// const cities = {
//   London: "LONDON",
//   LA: "Los Angeles",
//   Paris: "PARIS",
// };
// console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

function majority(array, callback) {
  let trueResults = 0;
  let falseResults = 0;

  forEach(array, (element) => {
    if (callback(element)) {
      trueResults += 1;
    } else {
      falseResults += 1;
    }
  });

  return trueResults > falseResults;
}

// /*** Uncomment these to check your work! ***/
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) {
//   return num % 2 !== 0;
// } // CLASHED WITH ANOTHER FUNCTION UNCOMMENT THIS

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
