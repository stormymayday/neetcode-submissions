class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const length = nums.length;

        if(length === 0) {
            return 0;
        }

        const sortedNums = nums.sort((a, b) => a - b);

        let longest = 1;
        let currentLongest = 1;

        for(let i = 1; i < length; i++) {
            if(nums[i] === nums[i - 1]) {
                continue;
            }
            if(nums[i] - nums[i - 1] === 1) {
                currentLongest++;
            } else {
                longest = Math.max(longest, currentLongest);
                currentLongest = 1;
            }
        }

        return Math.max(longest, currentLongest);

    }
}
