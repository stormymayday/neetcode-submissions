class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let totalWater = 0;
        const n = height.length;

        if(n === 0) {
            return totalWater;
        }

        let maxLeft = new Array(n).fill(0);
        let maxRight = new Array(n).fill(0);

        maxLeft[0] = height[0];
        for(let i = 1; i < n; i++) {
            maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
        }

        maxRight[n - 1] = height[n - 1];
        for(let i = n - 2; i >= 0; i--) {
            maxRight[i] = Math.max(height[i], maxRight[i + 1]);
        }

        for(let i = 0; i < n; i++) {
            if(Math.min(maxLeft[i], maxRight[i]) - height[i] > 0) {
                totalWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
            }
            
        }

        return totalWater;

    }
}
