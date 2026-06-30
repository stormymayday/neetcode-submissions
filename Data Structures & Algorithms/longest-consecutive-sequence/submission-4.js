class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Initialize result to track the longest consecutive sequence found
        let result = 0;
        
        // Create a Set from the input array for O(1) lookups
        const set = new Set(nums);
        
        // Iterate through each number in the original array
        for(let i = 0; i < nums.length; i++) {
            // Get the current number to check
            let currentNum = nums[i];
            
            // Only start a streak if this number is the beginning of a sequence
            // (i.e., there's no number one less than it in the set)
            if(!set.has(currentNum - 1)) {
                // Initialize streak counter for the current sequence
                let streak = 0;
                
                // Keep incrementing currentNum and checking if it exists in our set
                // This finds consecutive numbers in ascending order
                while(set.has(currentNum)) {
                    streak++;
                    currentNum++;
                }
                
                // Update result if we found a longer consecutive sequence
                result = Math.max(result, streak);
            }
        }
        
        // Return the length of the longest consecutive sequence
        return result;
    }
}
