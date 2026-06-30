class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    // Edge Case: If the array has fewer than 2 elements
    if (nums.length < 2) {
		    // A valid pair is not possible
        return null;
    }

    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        // If the difference does not exist in the hashMap
        if (hashMap[difference] === undefined) {
		        // Store the current value's index in the hashMap
		        hashMap[nums[i]] = i;
        }  else {
		        // Otherwise, return the indices
		        return [i, hashMap[difference]];
        }

        
    }

    // Return null if no valid pair is found
    return null;
}
}
