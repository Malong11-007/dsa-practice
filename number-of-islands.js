/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "1") {
          count++;
          traverseBfs(grid, i, j);
        }
      }
    }
  
    return count;
  };
  
  const traverseBfs = (grid, row, col) => {
    console.log(row, col);
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] !== "1") {
      return;
    }
  
    grid[row][col] = "0";
    traverseBfs(grid, row, col + 1);
    traverseBfs(grid, row + 1, col);
    traverseBfs(grid, row, col - 1);
    return traverseBfs(grid, row - 1, col);
  };
  
  