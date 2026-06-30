class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length === 0) {
            return 0;
        }

        let result = 1;

        nums.sort((a, b) => a - b);

        let streak = 1;
        for(let i = 0; i < nums.length - 1; i++) {
            
            // duplicates
            if(nums[i + 1] !== undefined && nums[i] === nums[i + 1]) {
                continue;
            }

            // consecutive
            if(nums[i] + 1 === nums[i + 1]) {
                streak++;
            } else {
                streak = 1;
            }

            result = Math.max(result, streak);

        }

        return result;
    }
}
