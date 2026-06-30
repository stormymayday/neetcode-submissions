class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // Iterate through each element in the array (except the last one)
        for (let i = 0; i < numbers.length - 1; i++) {
            // Iterate through all elements after `i`
            for (let j = i + 1; j < numbers.length; j++) {
                // Inefficiency 1: The nested loop results in O(n²) time complexity,
                // leading to unnecessary comparisons for large input sizes.
                
                // Inefficiency 2: The inner loop continues even after the sum exceeds the target.
                // Since the array is sorted, once we pass the target sum, further checks are unnecessary.
                if (numbers[i] + numbers[j] === target) {
                    // Return the 1-based indices as required by the problem statement
                    return [i + 1, j + 1];
                } else if(numbers[i] + numbers[j] > target) {
                    break;
                }
            }
        }
        // If no valid pair is found, return an empty array (optional but good practice)
        // Inefficiency 3: If there's no pair, returning undefined could cause confusion.
        return [];
    }
}
