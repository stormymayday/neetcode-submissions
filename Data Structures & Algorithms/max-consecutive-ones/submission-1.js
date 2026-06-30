class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let max = 0;

        for(let left = 0; left < nums.length; left += 1) {
            
            let currMax = 0;
            let right = left;
            while(nums[right] === 1) {
                currMax += 1;
                max = Math.max(max, currMax);
                right += 1;
            }

            if(right === nums.length) {
                break;
            }

        }

        return max;

    }
}
