class Solution {
    /**
     * @param {number[]} nums - The input array of numbers
     * @param {number} target - The target sum
     * @return {number[]} - The indices of the two numbers that add up to target
     */
    twoSum(nums, target) {
        // Iterate through the array with the first pointer (i)
        for (let i = 0; i < nums.length - 1; i++) {
            // Iterate through the remaining elements with the second pointer (j)
            for (let j = i + 1; j < nums.length; j++) {
                // Check if the sum of nums[i] and nums[j] equals the target
                if (nums[i] + nums[j] === target) {
                    // Return the indices of the two numbers
                    return [i, j];
                }
            }
        }
        // Return an empty array if no solution is found
        return [];
    }
}
