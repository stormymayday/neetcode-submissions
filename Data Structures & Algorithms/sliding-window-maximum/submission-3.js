class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const result = [];

        for(let i = 0; i <= nums.length - k; i++) {

            let windowMax = -Infinity;

            for(let j = i; j < i + k; j++) {

                windowMax = Math.max(windowMax, nums[j]);

            }

            result.push(windowMax);

        }


        return result;

    }
}
