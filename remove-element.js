var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    } else {
      k++;
    }
  }
  return k;
};

const array = [2, 3, 3, 2];
removeElement(array, 3);

console.log(array);
