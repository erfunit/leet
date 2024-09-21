var removeDuplicates = function (nums) {
  // Create a Set from nums to remove duplicates and convert it back to an array
  let uniqueNums = [...new Set(nums)];

  // Update the original array in place
  nums.length = 0; // Clear the original array
  nums.push(...uniqueNums); // Add the unique values back into the array

  // Return the length of the modified array
  return nums.length;
};

const nums = [1, 1, 2];

// Get the length of the array after removing duplicates
console.log(removeDuplicates(nums)); // Output: 2

// Display the updated array
console.log(nums); // Output: [1, 2]
