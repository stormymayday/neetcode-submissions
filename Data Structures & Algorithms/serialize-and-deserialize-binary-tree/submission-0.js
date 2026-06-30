/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {

        const res = [];
        
        function dfs(root) {

            if(root === null) {
                res.push('N');
                return;
            }

            res.push(root.val);

            dfs(root.left);

            dfs(root.right);


        }

        dfs(root);

        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {

        const arr = data.split(",");

        let idx = 0;

        function dfs() {

            if(arr[idx] === 'N') {
                idx += 1;
                return null;
            }

            const root = new TreeNode();
            root.val = arr[idx];
            idx += 1;

            root.left = dfs();
            
            root.right = dfs();
            
            return root;

        }

        return dfs();

    }
}
