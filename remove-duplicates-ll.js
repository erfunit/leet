var removeDuplicates = function (nums) {
  const objectData = {};

  for (let i = 0; i < nums.length; i++) {
    const item = [nums[i]];
    objectData[item] = objectData[item] || 0 + 1;
    if (objectData[item] > 2) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};
