class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maxArea = 0;
        const stack = [];

        for(let i = 0; i < heights.length; i++) {

            const currentHeight = heights[i];
            let startIndex = i;

            // while height on top of the stack is greater
            while(stack.length !== 0 && stack[stack.length - 1][0] > currentHeight) {
                const [height, index] = stack.pop();
                maxArea = Math.max(maxArea, (height * (i - index)));
                // thats a tricky part!
                // going backwards
                startIndex = index;
            }

            stack.push([currentHeight, startIndex]);

        }

        while(stack.length) {
            const [height, index] = stack.pop();
            maxArea = Math.max(maxArea, (height * (heights.length - index)));
        }

        return maxArea;

    }
}
