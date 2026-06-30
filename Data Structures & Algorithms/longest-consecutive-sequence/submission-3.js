class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Initialize result to track the longest consecutive sequence found
        let result = 0;
        
        // Create a Set from the input array for O(1) lookups
        // This allows us to quickly check if a number exists
        const set = new Set(nums);
        
        // Iterate through each number in the original array
        for(let i = 0; i < nums.length; i++) {
            // Initialize streak counter for the current sequence
            let streak = 0;
            
            // Start with the current number
            let currentNum = nums[i];
            
            // Keep incrementing currentNum and checking if it exists in our set
            // This finds consecutive numbers in ascending order
            while(set.has(currentNum)) {
                streak++;
                currentNum++;
            }
            
            // Update result if we found a longer consecutive sequence
            result = Math.max(result, streak);
        }
        
        // Return the length of the longest consecutive sequence
        return result;
    }
}