const merge = (nums1, m, nums2, n) => {
  let mergeIndex = m + n - 1;
  let n1 = m - 1;
  let n2 = n - 1;

  while (n1 >= 0 && n2 >= 0) {
    if (nums1[n1] > nums2[n2]) {
      nums1[mergeIndex] = nums1[n1];
      n1--;
    } else {
      nums1[mergeIndex] = nums2[n2];
      n2--;
    }
    mergeIndex--;
  }

  while (n2 >= 0) {
    nums1[mergeIndex] = nums2[n2];
    n2--;
    mergeIndex--;
  }
};

const array1 = [4, 5, 6, 0, 0, 0];
merge(array1, 3, [1, 2, 3], 3);

// result = [4,5,1,6,2,3] //! wrong
// [1,2,3,4,5,6] // ** this is the expected one

// console.log(array1);
