class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        // Track the maximum rectangle area found so far
        let maxArea = 0;

        // Stack stores pairs of [height, startIndex] where startIndex is the leftmost position
        // where this height can extend to the left
        const stack = [];

        // Iterate through each bar in the histogram
        for(let i = 0; i < heights.length; i++) {

            const currentHeight = heights[i];

            // startIndex will be used to track where the current height starts from
            // initially set to current position
            let startIndex = i;

            // If the current height is smaller than heights on the stack,
            // we need to calculate areas for all taller heights (they can't extend further right)
            while(stack.length !== 0 && stack[stack.length -1][0] > currentHeight) {

                // Pop the taller height and its starting index
                const [height, index] = stack.pop();
                
                // Calculate area: height × width
                // width = current position - starting index of the popped height
                maxArea = Math.max(maxArea, (height * (i - index)));
                
                // Update startIndex for current height to extend left to where the popped height started
                startIndex = index;
            }

            // Push the current height with its leftmost possible position
            stack.push([currentHeight, startIndex]);
        }
        
        // Process any heights remaining in the stack
        // These heights extend all the way to the end of the histogram
        while(stack.length !== 0) {

            const [height, index] = stack.pop();

            // Calculate area using the full width from start index to end of histogram
            maxArea = Math.max(maxArea, (height * (heights.length - index)));
            
        }

        return maxArea;
    }
}
