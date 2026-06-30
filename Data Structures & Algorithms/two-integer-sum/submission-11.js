class Solution {
    /**
     * @param {number[]} nums - The input array of numbers
     * @param {number} target - The target sum we're looking for
     * @return {number[]} - Array containing indices of the two numbers that add up to target
     */
    twoSum(nums, target) {
        // Create an empty object to store numbers we've seen and their indices
        // This lets us look up values in O(1) time
        const hashMap = {};
        
        // Loop through each number in the array once - O(n) time complexity
        for(let i = 0; i < nums.length; i++) {
            // Get the current number we're examining
            const currentNum = nums[i];
            
            // Calculate what number we need to find to reach our target
            // If current number is x, we need to find y where x + y = target
            // Therefore y = target - x
            const difference = target - currentNum;
            
            // Check if we've already seen this complementary number before
            // !== undefined check ensures we handle edge cases where the value itself is 0
            if(hashMap[difference] !== undefined) {
                // If we found it, we have our answer!
                // Return current index and the index of the complementary number
                return [i, hashMap[difference]];
            } else {
                // If we haven't seen the complementary number yet, store this number
                // with its index for future reference
                hashMap[currentNum] = i;
            }
        }
        
        // If no solution is found after checking all numbers (though the problem
        // guarantees exactly one solution exists), return an empty array
        return [];
    }
}