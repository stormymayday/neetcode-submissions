class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length === 0) {
            return 0;
        }

        nums.sort((a,b) => a - b);

        let longestStreak = 1;
        let currentStreak = 1;
        for(let i = 0; i < nums.length - 1; i++) {

            if(nums[i] === nums[i + 1]) {
                continue;
            }

            if(nums[i] + 1 === nums[i + 1]) {
                currentStreak++;
                longestStreak = Math.max(longestStreak, currentStreak);
            } else {
                currentStreak = 1;
            }

        }

        return longestStreak;

    }
}
