class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a, b) => a - b);
        let i = 0;
        while(i < nums.length) {
            if(i !== nums[i]) {
                return i;
            }
            i += 1;
        }
        return i;
    }
}
