class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let longest = 0;
        let left = 0;
        let numZeroes = 0;
        for(let right = 0; right < nums.length; right += 1) {

            if(nums[right] === 0) {

                numZeroes += 1;

                if(numZeroes > k) {

                    while(left < nums.length && nums[left] !== 0) {
                        left += 1;
                    }

                    left += 1;

                    numZeroes -= 1;

                }

            }

            longest = Math.max(longest, right - left + 1);

        }
        return longest;

    }
}
