class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let m = grid.length;
        let n = grid[0].length;

        // storing rotten indices in an queue
        let queue = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    // storing indices with minute count
                    // e.g. [x, y, minute]
                    queue.push([i, j, 0]);
                }
            }
        }

        let minutes = 0;
        while (queue.length > 0) {
            let [x, y, minute] = queue.shift();
            minutes = minute;

            // check the top orange and spoil it
            if (x > 0 && grid[x - 1][y] == 1) {
                grid[x - 1][y] = 2;
                queue.push([x - 1, y, minute + 1]);
            }

            // check the right orange and spoil it
            if (y < n - 1 && grid[x][y + 1] == 1) {
                grid[x][y + 1] = 2;
                queue.push([x, y + 1, minute + 1]);
            }

            // check the bottom orange and spoil it
            if (x < m - 1 && grid[x + 1][y] == 1) {
                grid[x + 1][y] = 2;
                queue.push([x + 1, y, minute + 1]);
            }

            // check the left orange and spoil it
            if (y > 0 && grid[x][y - 1] == 1) {
                grid[x][y - 1] = 2;
                queue.push([x, y - 1, minute + 1]);
            }
        }

        // finally check any good oranges
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    return -1;
                }
            }
        }

        return minutes;
    }
}
