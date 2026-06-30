class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjList = new Map(); // string to Set<string>
        for(const word of words) {
            for(const char of word) {
                if(!adjList.has(char)) {
                    adjList.set(char, new Set());
                }
            }
        }
        for(let i = 0; i < words.length - 1; i += 1) {
            const word1 = words[i];
            const word2 = words[i + 1];
            const minLength = Math.min(word1.length, word2.length);
            if(word1.substring(0, minLength) === word2.substring(0, minLength) && word1.length > word2.length) {
                return "";
            }
            for(let j = 0; j < minLength; j += 1) {
                const char1 = word1[j];
                const char2 = word2[j];
                if(char1 !== char2) {
                    adjList.get(char1).add(char2);
                    break;
                }
            }
        }
        const inDegree = new Map(); // char to number (count)
        for(const node of adjList.keys()) {
            if(!inDegree.has(node)) {
                inDegree.set(node, 0);
            }
        }
        for(const parent of adjList.keys()) {
            for(const child of adjList.get(parent)) {
                inDegree.set(child, inDegree.get(child) + 1);
            }
        }
        const queue = [];
        for(const [node, count] of inDegree.entries()) {
            if(count === 0) {
                queue.push(node);
            }
        }
        const topOrder = [];
        while(queue.length > 0) {
            const current = queue.shift();
            topOrder.push(current);
            for(const child of adjList.get(current)) {
                inDegree.set(child, inDegree.get(child) - 1);
                if(inDegree.get(child) === 0) {
                    queue.push(child);
                }
            }
        }
        if(topOrder.length === adjList.size) {
            return topOrder.join("");
        } else {
            return "";
        }
    }
}
