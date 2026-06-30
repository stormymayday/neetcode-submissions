class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity;

        for(let i = 0; i < nums.length; i += 1) {
            let sum = 0;
            for(let j = i; j < nums.length; j += 1) {
                sum += nums[j];
                if(sum > max) {
                    max = sum;
                }
            }
        }

        return max;
    }
}
