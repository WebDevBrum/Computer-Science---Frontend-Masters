Front End Masters Workbook

This Repo contains continuing work and exercises as i progress through the Front end masters curriculum.

My aim here is to strengthen my skills as a developer to a professional level.

21/08/21

__JavaScript the hard parts v2, with Will Sentance__


function bubbleSort(nums) {
  let swapped = false;
  // Loop runs while swapped is true , after first loop, it will then keep looping through the array until swapped never changes to true.
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      // snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  // snapshot(nums);
}