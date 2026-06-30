class Solution {
    /**
     * @param {number[]} nums - An array of numbers
     * @return {boolean} - Returns true if a duplicate is found, otherwise false
     */
    hasDuplicate(nums) {
        // Step 1: Sort the array in ascending order (O(N log N) time complexity)
        nums.sort((a, b) => a - b);

        // Step 2: Iterate through the sorted array and check for consecutive duplicate elements
        // for (let i = 0; i < nums.length; i++) {
        for (let i = 0; i < nums.length - 1; i++) {
            // If the next element exists and is the same as the current element, return true
            // if (nums[i + 1] !== undefined && nums[i] === nums[i + 1]) {
            if (nums[i] === nums[i + 1]) {
                return true; // Duplicate found
            }
        }

        // Step 3: If no duplicates are found, return false
        return false;
    }
}
