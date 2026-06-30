class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let totalWater = 0;

        if(height.length < 3) {
            return totalWater;
        }

        // Initialize arrays to store maximum heights
        const maxLeft = new Array(height.length).fill(0);
        const maxRight = new Array(height.length).fill(0);

        // Calculate maximum heights to the left of each position
        let prevMaxLeft = 0;
        for(let i = 1; i < height.length; i++) {
            if(height[i - 1] > prevMaxLeft) {
                prevMaxLeft = height[i - 1];
            }
            maxLeft[i] = prevMaxLeft;
        }

        // Calculate maximum heights to the right of each position
        let prevMaxRight = 0;
        for(let i = height.length - 2; i >= 0; i--) {
            if(height[i + 1] > prevMaxRight) {
                prevMaxRight = height[i + 1];
            }
            maxRight[i] = prevMaxRight;
        }

        for(let i = 0; i < height.length; i++) {
            let currentWater = Math.min(maxLeft[i], maxRight[i]) - height[i];
            if(currentWater > 0) {
                totalWater += currentWater;
            }
        }

        return totalWater;

    }
}
