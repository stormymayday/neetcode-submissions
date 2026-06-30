class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let max = 0;
        let left = 0;
        let right = 0;

        while(right <= nums.length) {

            if(nums[right] === 1) {
                left = right;
                let currMax = 0;
                while(right < nums.length && nums[right] === 1) {
                    currMax += 1;
                    max = Math.max(max, currMax);
                    right += 1;
                }
            }

            right += 1;

        }

        return max;

    }
}
