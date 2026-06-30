class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const original = [];

        // Loop through the input array nums and pushes pairs of [value, index].
        // This preserves the original indices while allowing the values to be sorted.
        for(let i = 0; i < nums.length; i++) {
            original.push([nums[i], i]);
        }

        // Sort based on the values (the first element of each pair).
        original.sort((a,b) => a[0] - b[0]);
        
        // 'left' starts at index 0 (smallest value)
        let left = 0;
        // 'right' starts at index nums.length - 1 (largest value)
        let right = nums.length - 1;
        while(left < right) {
            // current[left][0] accesses the first element (the value) of the pair at index left
            // current[right][0] accesses the first element (the value) of the pair at index right
            // The [0] in each expression is specifically accessing the value part of each pair.
            const currentSum = original[left][0] + original[right][0];

            if(currentSum === target) {
                // This line returns the original indices of the two numbers that sum up to the target, and it ensures they're returned in ascending order.
                // current[left][1] gets the original index (the second element of the pair) at position 'left'
                // current[right][1] gets the original index (the second element of the pair) at position 'right'
                // Math.min(current[left][1], current[right][1]) finds the smaller of these two indices
                // Math.max(current[left][1], current[right][1]) finds the larger of these two indices
                return [Math.min(original[left][1], original[right][1]), Math.max(original[left][1], original[right][1])]; 
            } else if(currentSum > target) {
                right--;
            } else {
                left++;
            }
        }

        return [];
    }
}
