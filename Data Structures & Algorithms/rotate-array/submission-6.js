class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        
        if(k === 0 || k === nums.length || nums.length === 1) {
            return;
        }

        k = k % nums.length;

        const rotated = new Array(nums.length);
        for(let i = 0; i < nums.length; i += 1) {
            rotated[(i + k) % nums.length] = nums[i];
        }

        for(let i = 0; i < nums.length; i += 1) {
            nums[i] = rotated[i];
        }

    }
}
