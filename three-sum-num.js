/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const triplets = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const requiredSum = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sumOfLR = nums[left] + nums[right];
      if (sumOfLR === requiredSum) {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sumOfLR > requiredSum) {
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (sumOfLR < requiredSum) {
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      }
    }
  }

  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
