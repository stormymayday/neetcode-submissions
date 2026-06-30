class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    // Initialize the total water collected
    let totalWater = 0;
    const n = height.length;

    // Edge case: empty array
    if(n === 0) {
        return totalWater;
    }

    // Arrays to track maximum heights to the left and right of each position
    let maxLeft = new Array(n).fill(0);
    let maxRight = new Array(n).fill(0);

    // Build the maxLeft array - maximum height to the left of each position
    // Notice we don't initialize maxLeft[0] since there's nothing to its left
    for(let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
    }

    // Build the maxRight array - maximum height to the right of each position
    // Notice we don't initialize maxRight[n-1] since there's nothing to its right
    for(let i = n - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
    }

    // Calculate water trapped at each position
    for(let i = 0; i < n; i++) {
        // Water at position i = min(tallest bar left, tallest bar right) - current height
        const currentWater = Math.min(maxLeft[i], maxRight[i]) - height[i];
        // Only add positive values (can't have negative water)
        if(currentWater > 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
}
}
