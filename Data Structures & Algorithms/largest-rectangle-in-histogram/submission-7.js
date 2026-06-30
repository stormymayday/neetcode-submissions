class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maxArea = 0;

        for(let i = 0; i < heights.length; i++) {

            const currentHeight = heights[i];
            let currentWidth = 1;

            let left = i - 1;
            while(left >= 0 && currentHeight <= heights[left]) {
                currentWidth++;
                left--;
            }

            let right = i + 1;
            while(right < heights.length && currentHeight <= heights[right]) {
                currentWidth++;
                right++;
            }

            maxArea = Math.max(maxArea, currentHeight * currentWidth);

        }

        return maxArea;

    }
}
