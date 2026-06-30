class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;

        for(let i = 0; i < height.length; i++) {

            let maxLeft = 0;
            let leftPointer = i - 1;
            while(leftPointer >= 0) {
                maxLeft = Math.max(maxLeft, height[leftPointer]);
                leftPointer--;
            }

            let maxRight = 0;
            let rightPointer = i + 1;
            while(rightPointer < height.length) {
                maxRight = Math.max(maxRight, height[rightPointer]);
                rightPointer++;
            }

            let currentWater = Math.min(maxLeft, maxRight) - height[i];
            if(currentWater > 0) {
                totalWater+=currentWater;
            }

        }

        return totalWater;
    }
}
