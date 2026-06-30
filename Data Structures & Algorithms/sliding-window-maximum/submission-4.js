class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
    // Array to store maximum values of each sliding window
    const result = [];

    // Iterate through all possible window positions
    // For a window of size k, there are (n-k+1) possible windows
    for(let i = 0; i <= nums.length - k; i++) {
        
        // Initialize windowMax to negative infinity
        // This ensures any value in the array (including negative numbers)
        // will be properly considered as a potential maximum
        let windowMax = -Infinity;
        
        // Iterate through each element in the current window
        // Window spans from index i to i+k-1
        for(let j = i; j < i + k; j++) {

            // Update windowMax if current element is larger
            // This gradually finds the maximum value in the window
            windowMax = Math.max(windowMax, nums[j]);
            }
            
            // Add the maximum value of current window to result array
            result.push(windowMax);
        }

        // Return array containing maximum of each sliding window
        return result;
    }
}
