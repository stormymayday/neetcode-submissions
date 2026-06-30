class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let totalWater = 0;

        let left = 0;
        let right = height.length - 1;

        let leftMax = 0;
        let rightMax = 0;

        while(left < right) {

            if(height[left] > height[right]) {
                // Left is larger, work with right
                if(height[right] >= rightMax) {
                    // can't calc water
                    // updated max
                    rightMax = height[right];
                    // move right
                    right--;
                } else {
                    // calc water
                    totalWater += rightMax - height[right];
                    // move right
                    right--;
                }
            } else {
                // Right is larget, work with left
                if(height[left] >= leftMax) {
                    // can't calc
                    // update max
                    leftMax = height[left];
                    // move left
                    left++;
                } else {
                    // calc water
                    totalWater += leftMax - height[left];
                    // move left
                    left++;
                }
            }

        }

        return totalWater;

    }
}
