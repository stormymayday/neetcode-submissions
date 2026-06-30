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
        if(this.root === null) {
            this.root = newNode;
            return;
        } else {
            let curr = this.root;
            while(true){
                if(key < curr.key) {
                    if(curr.left === null) {
                        curr.left = newNode;
                        return;
                    }
                    curr = curr.left;
                } else if(key > curr.key) {
                    if(curr.right === null) {
                        curr.right = newNode;
                        return;
                    }
                    curr = curr.right;
                } else {
                    // overwriting the value
                    curr.val = val;
                    return;
                }
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        if(this.root === null) {
            return -1;
        } else {
            let curr = this.root;
            while(curr !== null) {
                if(key < curr.key) {
                    curr = curr.left;
                } else if(key > curr.key) {
                    curr = curr.right;
                } else {
                    return curr.val;
                }
            }
            return -1;
        }
    }

    /**
     * @returns {number}
     */
    getMin() {
        if(this.root === null) {
            return -1;
        } else {
            let curr = this.root;
            while(curr.left !== null) {
                curr = curr.left;
            }
            return curr.val;
        }
    }

    /**
     * @returns {number}
     */
    getMax() {
        if(this.root === null) {
            return -1;
        } else {
            let curr = this.root;
            while(curr.right !== null) {
                curr = curr.right;
            }
            return curr.val;
        }
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        if(this.root === null) {
            return;
        }

        function helperDFS(node, key) {

            if(node === null) {
                return null;
            }

            if(key < node.key) {
                node.left = helperDFS(node.left, key);
            } else if(key > node.key) {
                node.right = helperDFS(node.right, key);
            } else {
                if(node.left === null && node.right === null) {
                    node = null;
                } else if(node.left === null) {
                    node = node.right;
                } else if(node.right === null) {
                    node = node.left;
                } else {
                    let predecessor = node.left;
                    while(predecessor.right !== null) {
                        predecessor = predecessor.right;
                    }
                    node.val = predecessor.val;
                    node.key = predecessor.key;
                    node.left = helperDFS(node.left, predecessor.key);
                }
                return node;
            }
        }

        this.root = helperDFS(this.root, key);
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const res = [];
        if(this.root === null) {
            return res;
        }
        function helperDFS(node) {
            if(node === null) {
                return;
            }
            helperDFS(node.left);
            res.push(node.key);
            helperDFS(node.right);
        }
        helperDFS(this.root);
        return res;
    }
}
