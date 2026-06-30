class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {

        const newNode = new TreeNode(key, val);

        // Edge Case: root is null
        if(this.root === null) {
            this.root = newNode;
            return;
        }

        // Find a spot for the newNode
        let curr = this.root;
        while(true) {
            // keys are equal
            if(key === curr.key) {
                // Overwrite, current val
                curr.val = val;
                return;
            } 
            // key is smaller than current.key
            else if(key < curr.key) {
                // no left child
                if(curr.left === null) {
                    // insert newNode as a left child
                    curr.left = newNode;
                    return;
                } else {
                    // otherwise, move down left
                    curr = curr.left;
                }
            } 
            // key must be greater than current.key
            else {
                // no right child
                if(curr.right === null) {
                    // insert newNode as a right child
                    curr.right = newNode;
                    return;
                } else {
                    // otherwise, move down right
                    curr = curr.right;
                }
            }

        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let curr = this.root;
        while(curr !== null) {
            if(key === curr.key) {
                return curr.val;
            } else if(key < curr.key) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        return -1;

    }

    /**
     * @returns {number}
     */
    getMin() {
        // Edge Case: root is null
        if(this.root === null) {
            return -1;
        }

        let curr = this.root;
        while(curr.left !== null) {
            curr = curr.left;
        }
        return curr.val;

    }

    /**
     * @returns {number}
     */
    getMax() {
        // Edge Case: root is null
        if(this.root === null) {
            return -1;
        }

        let curr = this.root;
        while(curr.right !== null) {
            curr = curr.right;
        }
        return curr.val;
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        
        // Recursive Helper
        const helper = (node, key) => {
            
            // Base Case
            if(node === null) {
                return null;
            }

            // target node could be on the left
            if(key < node.key) {
                node.left = helper(node.left, key);
            } 
            // target node could be on the right
            else if(key > node.key) {
                node.right = helper(node.right, key);
            } 
            // current node is the target
            else {
                // node has no children
                // if(node.left === null && node.right === null) {
                //     // delete current node
                //     node = null;
                // } 
                // // node only has right child
                // else 
                if(node.left === null) {
                    // replace current node with it's right child
                    node = node.right;
                } 
                // node only has a left child
                else if(node.right === null) {
                    // replace current node with it's left child
                    node = node.left;
                } 
                // node has both children
                else {
                    // find node with the minKey in the current node's right subtree
                    let leftmost = node.right;
                    while(leftmost.left !== null) {
                        leftmost = leftmost.left;
                    }

                    // overwrite current node's key and value
                    node.val = leftmost.val;
                    node.key = leftmost.key;

                    // recursively delete node with minKey from the right subtree
                    node.right = helper(node.right, leftmost.key);
                }

            }

            return node;

        }

        this.root = helper(this.root, key);

    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {

        const res = [];
        const stack = [];

        let curr = this.root;
        while(curr !== null || stack.length > 0) {

            // go left as far as possible
            while(curr !== null) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            res.push(curr.key);
            
            curr = curr.right;

        }

        return res;

    }
}
