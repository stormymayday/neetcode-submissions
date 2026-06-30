class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let maxArea = 0;

        for(let i = 0; i < heights.length - 1; i++) {

            let currentMaxArea = 0;

            for(let j = i + 1; j < heights.length; j++) {

                currentMaxArea = (j - i) * Math.min(heights[i], heights[j]);
                maxArea = Math.max(maxArea, currentMaxArea);
            }
        }


        return maxArea;

    }
}
