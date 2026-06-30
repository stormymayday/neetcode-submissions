class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Map to store previously seen numbers and their indices
    const hashMap = {};

    // Iterate through the array once
    for(let i = 0; i < numbers.length; i++) {
        // Calculate the value needed to reach target with current number
        let difference = target - numbers[i];

        // Check if we've already seen the complementary number
        if(hashMap[difference] !== undefined) {
            // Found a match! Return both indices (adding 1 to convert to 1-indexed)
            // hashMap[difference] will be the smaller index since we encountered it first
            return [hashMap[difference] + 1, i + 1];
        } else {
            // Store current number and its index for future lookups
            hashMap[numbers[i]] = i;
        }
    }
    }
}
