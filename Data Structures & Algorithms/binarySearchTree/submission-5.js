class TreeNode {
    constructor(key, val) {
        this.val = val;
        this.key = key
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
        } else {
            let temp = this.root;
            while(true) {
                if(key < temp.key) {
                    if(temp.left === null) {
                        temp.left = newNode;
                        return;
                    }
                    temp = temp.left
                } else if(key > temp.key) {
                    if(temp.right === null) {
                        temp.right = newNode;
                        return;
                    }
                    temp = temp.right;
                } else {
                    temp.val = val;
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
        }
        let temp = this.root;
        while(temp !== null) {
            if(key < temp.key) {
                temp = temp.left;
            } else if(key > temp.key) {
                temp = temp.right;
            }  else {
                return temp.val;
            }
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if(this.root === null) {
            return -1;
        }
        let min = this.root;
        while(min.left !== null) {
            min = min.left;
        }
        return min.val;
    }

    /**
     * @returns {number}
     */
    getMax() {
        if(this.root === null) {
            return -1;
        }
        let max = this.root;
        while(max.right !== null) {
            max = max.right;
        }
        return max.val;
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

                    let inorderSuccessor = node.right;
                    while(inorderSuccessor.left !== null) {
                        inorderSuccessor = inorderSuccessor.left;
                    }

                    node.key = inorderSuccessor.key;
                    node.val = inorderSuccessor.val;

                    node.right = helperDFS(node.right, inorderSuccessor.key);

                }
            }

            return node;

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
