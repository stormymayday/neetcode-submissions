class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // Step 1: Sort the array to make sure duplicates are handled easily
        nums.sort((a, b) => a - b);

        // Step 2: Initialize an object to store the frequency of each number in the array
        const count = {};

        // Step 3: Count the occurrences of each number in the array
        for (let num of nums) {
            // If num exists in the object, increment its count; otherwise, set it to 1
            if (count[num]) {
                count[num]++;
            } else {
                count[num] = 1;
            }
        }

        // Step 4: Initialize an array to store the result (unique triplets)
        const res = [];

        // Step 5: Iterate through the array to consider the first element of the triplet
        for (let i = 0; i < nums.length; i++) {
            // Decrease the count of the current element as it's being used
            count[nums[i]]--;

            // Skip duplicates for the first element (i) to avoid redundant triplets
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Step 6: Iterate through the remaining elements to consider the second element of the triplet
            for (let j = i + 1; j < nums.length; j++) {
                // Decrease the count of the second element as it's being used
                count[nums[j]]--;

                // Skip duplicates for the second element (j) to avoid redundant triplets
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                // Step 7: Calculate the target value needed to make the sum zero
                const target = -(nums[i] + nums[j]);

                // Step 8: Check if the target exists in the object and its count is greater than 0
                if (count[target] > 0) {
                    // If it does, add the triplet [nums[i], nums[j], target] to the result
                    res.push([nums[i], nums[j], target]);
                }
            }

            // Step 9: Restore the count of the second element for future iterations of the first element
            for (let j = i + 1; j < nums.length; j++) {
                count[nums[j]]++;
            }
        }

        // Step 10: Return the result with all unique triplets
        return res;
    }
}
