class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        const trie = new Trie();
        for(let i = 0; i < words.length; i += 1) {
            trie.insert(words[i]);
        }

        const res = new Set();

        for(let row = 0; row < board.length; row += 1) {
            for(let col = 0; col < board[0].length; col += 1) {
                if(trie.startsWith(board[row][col])) {
                    this.dfs(board, row, col, res, [], trie, new Set());
                }
            }
        }

        return Array.from(res);

    }

    dfs(board, row, col, res, path, trie, visited) {
        // Base Case: out of bounds
        if(row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
            return;
        }

        // Base Case: visited
        if(visited.has(`${row},${col}`)) {
            return;
        }

        visited.add(`${row},${col}`);
        path.push(board[row][col]);
        const word = path.join(""); // O(n)

        // Base Case: prefix does not exist
        if(trie.startsWith(word) === false) {
            path.pop();
            visited.delete(`${row},${col}`);
            return;
        }

        // Base Case: word found
        if(trie.search(word) === true) {
            res.add(word);
            // continue?
        }

        const directions = [
            [-1, 0], // up
            [0 ,1], // right
            [1,0], // down
            [0, -1] // left
        ];
        for(const [rowDelta, colDelta] of directions) {
            const neighborRow = row + rowDelta;
            const neighborCol = col + colDelta;
            this.dfs(board, neighborRow, neighborCol, res, path, trie, visited);
        }

        path.pop();
        visited.delete(`${row},${col}`);

    }
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i += 1) {
            if(!curr.children.has(word[i])) {
                curr.children.set(word[i], new TrieNode());
            }
            curr = curr.children.get(word[i]);
        }
        curr.isWord = true;
    }
    search(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i += 1) {
            if(!curr.children.has(word[i])) {
                return false;
            } else {
                curr = curr.children.get(word[i]);
            }
        }
        return curr.isWord;
    }
    startsWith(prefix) {
        let curr = this.root;
        for(let i = 0; i < prefix.length; i += 1) {
            if(!curr.children.has(prefix[i])) {
                return false;
            } 
            curr = curr.children.get(prefix[i]);
        }
        return true;
    }
}









