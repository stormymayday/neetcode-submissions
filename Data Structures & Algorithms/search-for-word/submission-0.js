class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for(let r = 0; r < board.length; r += 1) {
            for(let c = 0; c < board[0].length; c += 1) {
                if(this.dfs(board, r, c, 0, word, new Set()) === true) {
                    return true;
                }
            }
        }
        return false;
    }

    dfs(grid, r, c, index, word, visited) {
        // Base Case 1: found!
        if(index === word.length) {
            return true;
        }

        // Base Case 2: out of bounds
        const rowInBounds = 0 <= r && r < grid.length;
        const colInBounds = 0 <= c && c < grid[0].length;
        if(!rowInBounds || !colInBounds) {
            return false;
        }

        // Base Case 3: char does not match
        if(grid[r][c] !== word[index]) {
            return false;
        }

        // Base Case 4: visited
        const position = `${r},${c}`;
        if(visited.has(position)) {
            return false;
        }

        visited.add(position);

        const result = this.dfs(grid, r - 1, c, index + 1, word, visited)
            || this.dfs(grid, r + 1, c, index + 1, word, visited)
            || this.dfs(grid, r, c - 1, index + 1, word, visited)
            || this.dfs(grid, r, c + 1, index + 1, word, visited);

        // Backtrack
        visited.delete(position);

        return result;
    }
}
