class Solution {
    /**
     * @param {string[]} folder
     * @return {string[]}
     */
    removeSubfolders(folder) {

        const res = [];

        const root = new TrieNode();

        // inserting into a trie
        for(let i = 0; i < folder.length; i += 1) {
            let curr = root;
            const parts = folder[i].split("/");
            for(let j = 0; j < parts.length; j += 1) {
                if(!curr.children.has(parts[j])) {
                    curr.children.set(parts[j], new TrieNode());
                }
                curr = curr.children.get(parts[j]);
            }
            curr.isEnd = true;
        }

        // filtering out the subfolders
        for(let i = 0; i < folder.length; i += 1) {
            let curr = root;
            const parts = folder[i].split("/");
            for(let j = 0; j < parts.length; j += 1) {
                if(!curr.children.has(parts[j])) {
                    break; // there is no such folder
                }
                // otherwise, folder exists
                else {
                    // move to the node
                    curr = curr.children.get(parts[j]);
                    if(
                        // if this is the 'end'
                        curr.isEnd === true && 
                        // AND this is the last part of current folder
                        j === parts.length - 1
                        ) {
                            // this is not a subfolder
                            res.push(folder[i]);
                    } 
                    // otherwise, since this is the 'end' and NOT a last character
                    // this is a sublfolder, therefore, skip
                    else if(
                        // if this is the 'end'
                        curr.isEnd === true && 
                        // AND this is NOT the last part of the current folder
                        j < parts.length - 1
                    ){
                        break;
                    }
                }
                
            }
        }

        return res;

    }
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}
