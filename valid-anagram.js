/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const mapS = {};
  for (let char of s) {
    if (!mapS[char]) {
      mapS[char] = 0;
    }
    mapS[char] = mapS[char] + 1;
  }

  for (let char of t) {
    if (!mapS[char] || mapS[char] <= 0) {
      return false;
    } else {
      mapS[char] = mapS[char] - 1;
    }
  }
  return true;
};

console.log(isAnagram("rat", "car"));
