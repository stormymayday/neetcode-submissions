class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // Initialize total water
        let totalWater = 0;
        
        // Edge case: Need at least 3 bars to trap water
        if(height.length < 3) {
            return totalWater;
        }
        
        // Iterate through each position
        for(let i = 0; i < height.length; i++) {
            // Find maximum height to the left of current position
            let maxLeft = 0;
            let leftPointer = i - 1;
            while(leftPointer >= 0) {
                maxLeft = Math.max(maxLeft, height[leftPointer]);
                leftPointer--;
            }
            
            // Find maximum height to the right of current position
            let maxRight = 0;
            let rightPointer = i + 1;
            while(rightPointer < height.length) {
                maxRight = Math.max(maxRight, height[rightPointer]);
                rightPointer++;
            }
            
            // Calculate water trapped at current position
            let currentWater = Math.min(maxLeft, maxRight) - height[i];
            if(currentWater > 0) {
                totalWater += currentWater;
            }
        }
        
        return totalWater;
    }
}
