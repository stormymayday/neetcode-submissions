class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n < 0) {
            return 0;
        }
        if(n === 0) {
            return 1;
        }

        return this.climbStairs(n - 2) + this.climbStairs(n - 1);
    }
}
