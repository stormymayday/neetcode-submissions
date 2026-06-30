class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Edge Cases
        if(nums.length === 0 || nums.length === 1) {
            return null;
        }

        // don't check the last element because it is for the second value
        for(let p1 = 0; p1 < nums.length -1; p1++) {
            // starting from one index after p1
            for(let p2 = p1 + 1; p2 < nums.length; p2++) {
                if(nums[p1] + nums[p2] === target) {
                    return [p1, p2];
                }
            }
        }

        // Solution does not exist
        return null;

    }
}
