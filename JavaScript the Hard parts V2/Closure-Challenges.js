/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
// Challenge questions can be found at csbin.io/closures

// CHALLENGE 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
function createFunction() {
  function innerFunction() {
    console.log("hello");
  }
  return innerFunction;
}

// /** * Uncomment these to check your work! ** */
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
function createFunctionPrinter(input) {
  function innerFunction() {
    console.log(input);
  }
  return innerFunction;
}

// /** * Uncomment these to check your work! ** */
// const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

// CHALLENGE 3
// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

// const willCounter = outer();
// const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

/** * Uncomment these to check your work! ** */
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  // this variable is outside incrementCounter's scope
  function incrementCounter(input) {
    // counter += x;
    console.log("counter", input + x);
    return input + x;
  }
  return incrementCounter;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
function once(func) {
  let numberOfCalls = 0;
  let firstOutput = null;

  function innerFunction(input) {
    if (numberOfCalls < 1) {
      firstOutput = func(input);
      numberOfCalls += 1;
      return firstOutput;
    }
    numberOfCalls += 1;
    return firstOutput;
  }

  return innerFunction;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter
function after(count, func) {
  let counter = 0;

  function innerFunction() {
    counter += 1;
    if (counter === count) {
      func();
    }
  }
  return innerFunction;
}

/** * Uncomment these to check your work! ** */
// const called = function () {
//   console.log("hello");
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

function delay(callback, wait, param) {
  setTimeout(callback, wait, param);
}

function log(string) {
  console.log(string);
}

delay(log, 10000, "cheeeese");

// CHALLENGE 7
function rollCall(names) {}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {}
