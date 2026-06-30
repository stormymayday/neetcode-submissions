class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let i = 0;
        let max = 0;
        let currMax = 0;
        while(i < nums.length) {

            if(nums[i] === 1) {
                currMax += 1;
                max = Math.max(max, currMax);
            } else {
                currMax = 0;
            }
            i += 1;
        }

        return max;
    }
}
