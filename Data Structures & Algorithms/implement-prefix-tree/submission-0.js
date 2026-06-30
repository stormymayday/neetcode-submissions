class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        
        // pointer starts at root
        let curr = this.root;

        // iterating over each character of the input word
        for(let i = 0; i < word.length; i += 1) {
            
            // check if current has character
            if(curr.children.has(word[i])) {
                // if yes, move poiter to it
                curr = curr.children.get(word[i]);
            } else {
                // otherwise create a new node
                curr.children.set(word[i], new TrieNode());
                // move to that node
                curr = curr.children.get(word[i]);
            }

        }

        // mark the last node
        curr.isWord = true;

    }

    /**
     * @param {string} word
     * @return {boolean}
     */
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

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {

        let curr = this.root;

        for(let i = 0; i < prefix.length; i += 1) {

            if(!curr.children.has(prefix[i])) {
                return false;
            } else {
                curr = curr.children.get(prefix[i]);
            }

        }

        return true;

    }
}
