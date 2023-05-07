/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// Solution 1
// var isSubtree = function (root, subRoot) {
//   if (!root || !subRoot) {
//     return false;
//   }

//   if (root.val === subRoot.val && isSameTree(root, subRoot)) {
//     return true;
//   }

//   return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// };

// const isSameTree = (p, q) => {
//   if (!p && !q) {
//     return true;
//   }

//   if (
//     (!p && q) ||
//     (p && !q) ||
//     (!p.left && q.left) ||
//     (p.right && !q.right) ||
//     (!p.left && q.left) ||
//     (p.right && !q.right) ||
//     p.val !== q.val
//   ) {
//     return false;
//   }

//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// Solution 2
var isSubtree = function (root, subRoot) {
  const rootTreeString = getTreeString(root);
  const subRootTreeString = getTreeString(subRoot);
  console(rootTreeString, subRootTreeString);

  return rootTreeString.includes(subRootTreeString);
};

const getTreeString = (root) => {
  if (!root) {
    return "null";
  }

  let string = `-${root.val}-`;
  string += getTreeString(root.left);
  string += getTreeString(root.right);

  return string;
};
