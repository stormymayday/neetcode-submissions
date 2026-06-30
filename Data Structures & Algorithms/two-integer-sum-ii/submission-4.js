class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        // Create a hash map to store numbers we've already seen
        const hashMap = new Map();

        // Iterate through the array of numbers
        for (let i = 0; i < numbers.length; i++) {

            // If the difference (target - numbers[i]) exists in the map, we've found a pair
            if (hashMap.has(target - numbers[i])) {
                // Return the indices of the two numbers (1-based index)
                return [hashMap.get(target - numbers[i]), i + 1];
            } else {
                // Add the current number and its index (1-based) to the map
                hashMap.set(numbers[i], i + 1);
            }

        }

        // If no valid pair is found, return an empty array
        return [];
    }
}
