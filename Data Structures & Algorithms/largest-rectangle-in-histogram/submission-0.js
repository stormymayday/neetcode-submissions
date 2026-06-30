class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maxArea = 0;

        for(let i = 0; i < heights.length; i++) {

            // take current height
            const currentHeight = heights[i];
            // start current max area calculation
            let currentMaxArea = currentHeight;
            
            // scan left
            let left = i - 1;
            while(left >= 0 && currentHeight <= heights[left]) {
                currentMaxArea += currentHeight;
                left--;
            }

            // scan right
            let right = i + 1;
            while(right < heights.length && currentHeight <= heights[right]) {
                currentMaxArea += currentHeight;
                right++;
            }

            // calculate max
            maxArea = Math.max(maxArea, currentMaxArea);

        }

        return maxArea;

    }
}
