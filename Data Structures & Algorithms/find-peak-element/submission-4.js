class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {

        if(nums.length === 1) {
            return 0;
        }

        if(nums.length > 1 && (nums[nums.length - 1] > nums[nums.length - 2])) {
            return nums.length - 1;
        }

        if(nums.length > 1 && (nums[0] > nums[1])) {
            return 0;
        }


        for(let i = 1; i < nums.length - 1; i += 1) {
            if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                return i;
            }
        }
    }
}
