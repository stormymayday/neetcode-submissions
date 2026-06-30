/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {

        function helper(length, rowStart, colStart) {

            if(length === 1) {
                return new Node(grid[rowStart][colStart] === 1, true);
            }

            const newLength = length / 2;

            const topLeft = helper(newLength, rowStart, colStart);
            const topRight = helper(newLength, rowStart, colStart + newLength);
            const bottomLeft = helper(newLength, rowStart + newLength, colStart);
            const bottomRight = helper(newLength, rowStart + newLength, colStart + newLength);

            if(
                (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf) &&
                (topLeft.val === topRight.val) &&
                (topRight.val === bottomLeft.val) &&
                (bottomLeft.val === bottomRight.val)
            ) {
                return new Node(topLeft.val, true);
            } else {
                return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
            }

        }

        return helper(grid.length, 0, 0);

    }
}
