class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums, i = 0, memo = {}) {

        if(i in memo) {
            return memo[i];
        }

        if(i >= nums.length) {
            return 0;
        }

        const include = nums[i] + this.rob(nums, i + 2, memo);
        const exclude = this.rob(nums, i + 1, memo);

        memo[i] = Math.max(include, exclude);
        
        return memo[i];
    }
}
