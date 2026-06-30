class Solution {
    /**
     * @param {number[]} height - Array representing elevation map where each element is height
     * @return {number} - Total amount of rainwater trapped
     */
    trap(height) {
        // Initialize variable to store the total trapped water
        let totalWater = 0;
        
        // Initialize two pointers - left starts at the beginning of the array
        let left = 0;
        // right starts at the end of the array
        let right = height.length - 1;
        
        // Track the maximum height seen from the left side
        let leftMax = 0;
        // Track the maximum height seen from the right side
        let rightMax = 0;
        
        // Continue until the two pointers meet
        while(left < right) {
            // Compare heights at the left and right pointers
            if(height[left] > height[right]) {
                // Left height is larger, so work with the right side
                
                // Check if current right height is at least as tall as rightMax
                if(height[right] >= rightMax) {
                    // Can't trap water here since there's no higher barrier to the right
                    // Update the maximum height seen from the right
                    rightMax = height[right];
                    // Move right pointer inward
                    right--;
                } else {
                    // Water can be trapped here (difference between rightMax and current height)
                    totalWater += rightMax - height[right];
                    // Move right pointer inward
                    right--;
                }
            } else {
                // Right height is larger or equal, so work with the left side
                
                // Check if current left height is at least as tall as leftMax
                if(height[left] >= leftMax) {
                    // Can't trap water here since there's no higher barrier to the left
                    // Update the maximum height seen from the left
                    leftMax = height[left];
                    // Move left pointer inward
                    left++;
                } else {
                    // Water can be trapped here (difference between leftMax and current height)
                    totalWater += leftMax - height[left];
                    // Move left pointer inward
                    left++;
                }
            }
        }
        
        // Return the total amount of water trapped
        return totalWater;
    }
}