class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const n = nums.length;

        for(let i = 0; i < n - 1; i += 1) {

            for(let j = i + 1; j < n; j += 1) {

                if(nums[i] + nums[j] === target) {
                    return [i, j];
                }

            }

        }

        return [-1, -1];

    }
}
