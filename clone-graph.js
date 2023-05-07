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
  if (!node || !node.val) {
    return [];
  }
  const nodesMap = traversBfs(node);
  const cloneGraph = nodesMap[node.val].nodeClone;

  // create nodes;
  for (let node in nodesMap) {
    nodesMap[node].neighbors.forEach((neighbor) => {
      nodesMap[node].nodeClone.neighbors.push(nodesMap[neighbor].nodeClone);
    });
  }

  return cloneGraph;
};

const traversBfs = (node) => {
  const queue = [node];
  const visitedNodes = {};

  while (queue.length > 0) {
    const removed = queue.shift();
    visitedNodes[removed.val] = {
      neighbors: [],
      nodeClone: new Node(removed.val),
    };
    removed.neighbors.forEach((neighbor) => {
      visitedNodes[removed.val].neighbors.push(neighbor.val);
      if (!visitedNodes[neighbor.val]) {
        queue.push(neighbor);
      }
    });
  }

  return visitedNodes;
};

// { '1': [ 2, 4 ], '2': [ 1, 3 ], '3': [ 2, 4 ], '4': [ 1, 3 ] }
// Node 1 = push(node2, node4)
// Node 2 = push(node1, node3)
// Node 3 = push(node2, node4)
// Node 4 = push(node1, node3)
