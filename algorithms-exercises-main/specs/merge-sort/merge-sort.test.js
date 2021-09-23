/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (left, right) => {
  const results = [];

  // go until one list runs outs
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      // it's like .pop() for the front
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // either left or right will be empty so you can safely concat both
  return results.concat(left, right);
};

const mergeSort = (nums) => {
  // code goes here
  // base case nums lenght is one
  if (nums.length <= 1) {
    return nums;
  }
  // initialise two empty arrays
  const arr1 = [];
  const arr2 = [];

  // find middle of nums array
  const centre = Math.floor(nums.length / 2);

  // split nums into two across these arrays
  for (let i = 0; i < centre; i++) {
    arr1.push(nums[i]);
  }
  for (let i = centre; i < nums.length; i++) {
    arr2.push(nums[i]);
  }

  // merge takes two sorted lists and returns one sorted list
  return merge(mergeSort(arr1), mergeSort(arr2));
};

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
// unit tests
// do not modify the below code
// test.skip("merge sort", function () {
//   const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
//   const ans = mergeSort(nums);
//   expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// });
