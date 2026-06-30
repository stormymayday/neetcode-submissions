class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Sort the array in ascending order to handle duplicates efficiently
        nums.sort((a, b) => a - b);

        // Initialize array to store unique triplets
        const result = [];

        // Iterate over the first number
        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for the first number to avoid redundant triplets
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            // Iterate over the second number
            for (let j = i + 1; j < nums.length - 1; j++) {
                // Skip duplicates for the second number
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    continue;
                }
                // Iterate over the third number
                for (let k = j + 1; k < nums.length; k++) {
                    // Skip duplicates for the third number
                    if (k > j + 1 && nums[k] === nums[k - 1]) {
                        continue;
                    }
                    // Check if the triplet sums to zero
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        // Add the triplet to the result
                        result.push([nums[i], nums[j], nums[k]]);
                    }
                }
            }
        }

        // Return the array of unique triplets
        return result;
    }
}