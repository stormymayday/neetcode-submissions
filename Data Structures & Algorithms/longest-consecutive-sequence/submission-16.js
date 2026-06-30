class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Initialize result variable to track the longest consecutive sequence found
        let result = 0;
        
        // Create a Set from the input array for O(1) lookups
        // This eliminates duplicates and provides efficient "contains" checks
        const set = new Set(nums);
        
        // Iterate through each unique number in the set
        for(const num of set) {
            // Store the current number in a separate variable that we can increment
            // This preserves the loop variable 'num' from being modified
            let currentNum = num;
            
            // Check if this number is the start of a sequence
            // We only want to count sequences from their beginning to avoid redundant work
            // A number is the start of a sequence if there is no number one less than it
            if(!set.has(currentNum - 1)) {
                // Initialize a counter for the current sequence length
                let streak = 0;
                
                // Explore the consecutive sequence starting from currentNum
                // Keep incrementing currentNum and checking if each number exists in our set
                while(set.has(currentNum)) {
                    streak++;
                    currentNum++;
                }
                
                // Update the result with the maximum streak found so far
                result = Math.max(result, streak);
            }
        }
        
        // Return the length of the longest consecutive sequence
        return result;
    }
}
