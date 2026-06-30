class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    // Array to store maximum values of each sliding window
    const result = [];

    // Initialize left pointer at the start of the array
    let left = 0;
    
    // Iterate with right pointer positioned at the end of each window
    // Start with first complete window (right = k-1)
        for(let right = k - 1; right < nums.length; right++) {
            
            // Get the current window as a subarray from left to right (inclusive)
            // Use Math.max with spread operator to find maximum value in current window
            result.push(Math.max(...nums.slice(left, right + 1)));
            
            // Slide the window one step right by incrementing left pointer
            left++;
        }

        // Return array containing maximum of each sliding window
        return result;
    }
}
