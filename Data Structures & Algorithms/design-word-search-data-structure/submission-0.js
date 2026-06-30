class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i += 1) {
            const idx = word[i].charCodeAt(0) - "a".charCodeAt(0);
            if(curr.children[idx] === null) {
                curr.children[idx] = new TrieNode();
            }
            curr = curr.children[idx];
        }
        curr.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(idx, node) {
            if(idx === word.length) {
                return node.isWord;
            }
            if(word[idx] === '.') {
                for(const child of node.children) {
                    if(child !== null) {
                        if(dfs(idx + 1, child) === true) {
                            return true;
                        }
                    }
                }
                return false;
            } else {
                const index = word[idx].charCodeAt(0) - "a".charCodeAt(0);
                if(node.children[index] === null) {
                    return false;
                } else {
                    return dfs(idx + 1, node.children[index]);
                }
            }
        }
        return dfs(0, this.root);
    }
}
