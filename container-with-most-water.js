/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  console.log(height);
  let max = 0;
  let L = 0;
  let R = height.length - 1;

  while (L < R) {
    max = Math.max(max, Math.min(height[L], height[R]) * (R - L));
    if (height[L] < height[R]) {
      L++;
    } else if (height[L] > height[R]) {
      R--;
    } else {
      L++;
      R--;
    }
  }

  return max;
};

console.log(
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49
);
console.log(maxArea([1, 1]), maxArea([1, 1]) === 1);
