class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;

        for (let i = 0; i < height.length; i++) {
            // Find maximum height to the left of current position
            let maxL = 0;
            for (let left = i - 1; height[left] !== undefined && left >= 0; left--) {
                maxL = Math.max(maxL, height[left]);
            }

            // Find maximum height to the right of current position
            let maxR = 0;
            for (let right = i + 1; height[right] !== undefined && right < height.length; right++) {
                maxR = Math.max(maxR, height[right]);
            }

            // Calculate water trapped at current position
            let currentWater = 0;
            currentWater = Math.min(maxL, maxR) - height[i];

            // Only add positive water amounts (can't trap negative water)
            if (currentWater > 0) {
                totalWater += currentWater;
            }
        }

        return totalWater;
    }
}
