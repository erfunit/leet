var rotate = function (nums, k) {
  const targetIndex = nums.length - k;
  //   const firstSlice = nums.slice(targetIndex);
  //   const secondSlice = nums.slice(0, targetIndex);
  //nums.length = 0
  nums = [...nums.slice(targetIndex), ...nums.slice(0, targetIndex)];
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
