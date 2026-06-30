class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let maxArea = 0;

        for(let left = 0; left < heights.length - 1; left++) {

            for(let right = left + 1; right < heights.length; right++) {

                let currentMax = 0;

                currentMax = Math.min(heights[left], heights[right]) * (right - left);

                maxArea = Math.max(maxArea, currentMax);


            }

        }

        return maxArea;

    }
}
