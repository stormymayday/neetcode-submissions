class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Initialize result to track the longest consecutive sequence
        let result = 0;
        
        // Iterate through each number in the array
        for(let i = 0; i < nums.length; i++) {
            // Start with the current number
            let currentNum = nums[i];
            
            // Initialize streak counter
            let streak = 0;
            
            // For each number, check if it exists, then check consecutive numbers
            while(this.nextNumberExists(nums, currentNum)) {
                streak++; // Increment streak when number is found
                currentNum++; // Move to next consecutive number
            }
            
            // Update result with the maximum streak found so far
            result = Math.max(result, streak);
        }
        
        // Return the length of the longest consecutive sequence
        return result;
    }
    
    // Helper method to check if a number exists in the array
    nextNumberExists(arr, num) {
        // Linear search through the array
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === num) {
                return true;
            }
        }
        
        return false;
    }
}