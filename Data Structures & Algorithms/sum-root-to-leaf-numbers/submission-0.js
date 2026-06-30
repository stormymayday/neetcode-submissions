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
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    sumNumbers(root) {

        let res = 0;

        const allPaths = [];
        
        function helper(node, path) {

            if(node === null) {
                return;
            }

            if(node.left === null && node.right === null) {
                path.push(`${node.val}`);
                allPaths.push([...path]);
                path.pop(); // backtrack
                return;
            }
            
            // visit
            path.push(`${node.val}`);

            // go left
            helper(node.left, path);

            // go right
            helper(node.right, path);

            // backtrack
            path.pop();

        }

        helper(root, []);

        for(const path of allPaths) {
            
            // issue probably here
            const pathAsNum = Number(path.join(""));

            res += pathAsNum;

        }


        return res;
    }
}
