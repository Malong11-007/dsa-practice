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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValidBSTRange(root, null, null);
};

const isValidBSTRange = (root, min, max) => {
  if (!root) {
    return true;
  }

  if (
    (min != null && root.val < min) ||
    (max != null && root.val > max) ||
    root.val === min ||
    root.val === max
  ) {
    return false;
  }

  if (
    !isValidBSTRange(root.left, min, root.val) ||
    !isValidBSTRange(root.right, root.val, max)
  ) {
    return false;
  }

  return true;
};

[1, 1];
