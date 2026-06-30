class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {

        const n = nums.length;
        let maxSum = -Infinity;

        for(let i = 0; i < n; i += 1) {

            let currSum = 0;

            for(let j = i; j < i + n; j += 1) {

                currSum += nums[j % n];

                maxSum = Math.max(maxSum, currSum);

            }

        }

        return maxSum;
    }
}
