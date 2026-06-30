class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {

        if(nums.length === 1) {
            return nums[0];
        }

        let p1 = 0;
        let p2 = 1;
        while(true) {
            if(nums[p1] !== nums[p2] || p2 >= nums.length) {
                return nums[p1];
            } else {
                p1 += 2;
                p2 += 2;
            }
        }
    }
}
