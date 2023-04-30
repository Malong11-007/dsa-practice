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
 * @return {number}
 */
var maxDepth = function (root) {
  return dfsDepth(root, 0);
};

const dfsDepth = (node, depth) => {
  if (!node) {
    return length;
  }

  depth++;

  depth = Math.max(dfsDepth(node.left, depth), dfsDepth(node.right, depth));

  return depth;
};
