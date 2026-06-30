class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

    if (nums.length === 0) {
        return 0;
    }
    
    nums.sort((a, b) => a - b);
    
    // Start with 1 since an array with at least one element has a streak of at least 1
    let longestStreak = 1;
    let currentStreak = 1;
     
    for(let i = 0; i < nums.length - 1; i++) {
        // Skip duplicates
        if(nums[i] === nums[i + 1]) {
            continue;
        }
        
        // Check if consecutive
        if(nums[i] + 1 === nums[i + 1]) {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        } else {
            // Reset streak for a new sequence
            currentStreak = 1;
        }
    }
    
    return longestStreak;
}
}
