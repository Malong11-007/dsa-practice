/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const clonedNodesMap = new Map();
  function dfsClone(node) {
    if (clonedNodesMap.has(node)) {
      console.log("already visited ", node.val);
      return clonedNodesMap.get(node);
    }

    const clone = new Node(node.val);
    clonedNodesMap.set(node, clone);
    console.log("main node", clone.val);
    node.neighbors.forEach((neighbor) => {
      console.log("main neighbors", neighbor.val);
      clone.neighbors.push(dfsClone(neighbor));
    });

    return clone;
  }

  if (node && node.val) {
    dfsClone(node);
    return clonedNodesMap.get(node);
  }

  return node;
};

// Input
// [[2,4],[1,3],[2,4],[1,3]]

// Output
// main node 1
// main neighbors 2
// main node 2
// main neighbors 1
// already visited  1
// main neighbors 3
// main node 3
// main neighbors 2
// already visited  2
// main neighbors 4
// main node 4
// main neighbors 1
// already visited  1
// main neighbors 3
// already visited  3
// main neighbors 4
// already visited  4
