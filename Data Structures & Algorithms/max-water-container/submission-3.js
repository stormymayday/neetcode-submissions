class Solution {
    /**
     * Calculates the maximum area between lines formed by the heights array.
     * @param {number[]} heights - An array of non-negative integers representing the heights of lines.
     * @return {number} - The maximum area of water that can be contained.
     */
    maxArea(heights) {
				// Initialize the maximum area to 0
        let maxArea = 0;

        // Pointers at the start and end of the array
        let left = 0;
        let right = heights.length - 1;

        // Continue until the pointers meet
        while (left < right) {

            // Calculate the current area using the shorter line as height
            let currentArea = Math.min(heights[left], heights[right]) * (right - left);

            // Update maxArea if the current area is larger
            maxArea = Math.max(currentArea, maxArea);

            // Move the pointer of the shorter line inward
            if (heights[left] > heights[right]) {
		             // Move the right pointer leftward
                right--;
            } else {
		            // Move the left pointer rightward
                left++;
            }
        }

        // Return the maximum area found
        return maxArea;
    }
}