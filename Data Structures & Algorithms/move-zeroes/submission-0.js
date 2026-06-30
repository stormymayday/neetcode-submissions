class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {

        for(let i = 0; i < nums.length; i += 1) {
            for(let j = i; j < nums.length; j += 1) {
                // kick '0' forward
                if(nums[j - 1] === 0) {
                    nums[j - 1] = nums[j];
                    nums[j] = 0;
                }

            }
        }

    }
}
