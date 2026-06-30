class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let result = 0;

        for(let i = 0; i < height.length; i++) {

            let maxL = 0;
            for(let left = i - 1; left >= 0; left--) {
                maxL = Math.max(maxL, height[left]);
            }

            let maxR = 0;
            for(let right = i + 1; right < height.length; right++) {
                maxR = Math.max(maxR, height[right]);
            }

            let currentCapacity = 0;

            currentCapacity = Math.min(maxL, maxR) - height[i];

            if(currentCapacity > 0) {
                result += currentCapacity;
            }

        }

        return result;

    }
}
