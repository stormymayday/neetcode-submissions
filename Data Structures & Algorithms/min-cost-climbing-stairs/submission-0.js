class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const index0 = this.helper(cost, 0);
        const index1 = this.helper(cost, 1);
        return Math.min(index0, index1);
    }

    helper(cost, i) {
        if(i > cost.length) {
            return Infinity;
        }
        if(i === cost.length) {
            return 0;
        }

        return cost[i] + Math.min(this.helper(cost, i + 1), this.helper(cost, i + 2));
    }
}
