class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {

        // Set for faster lookup
        // const wordSet = new Set(wordList);

        // Edge Case: endWord is not in the wordList
        // if(!wordSet.has(endWord)) {
        //     return 0;
        // }

        if(!wordList.includes(endWord)) {
            return 0;
        }

        const visited = new Set();
        const queue = [];
        queue.push([beginWord, 1]);
        visited.add(beginWord);

        while(queue.length > 0) {
            const [currWord, currDist] = queue.shift();
            if(currWord === endWord) {
                return currDist;
            }
            for(const neighbor of this.getNeighbors(currWord, wordList)) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, currDist + 1]);
                }
            }
        }
        return 0;

    }

    getNeighbors(node, wordList) {

        const neighbors = [];

        for(const word of wordList) {
            let diff = 0;
            for(let i = 0; i < word.length; i += 1) {
                if(node[i] !== word[i]) {
                    diff += 1;
                }
            }
            if(diff < 2) {
                neighbors.push(word);
            }
        }

        return neighbors;

    }
}