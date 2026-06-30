class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const n = nums.length;

        const seen = new Map();

        for(let i = 0; i < n; i += 1) {

            if(seen.has(target - nums[i])) {
                return [seen.get(target - nums[i]), i];
            }

            seen.set(nums[i], i);

        }

        return [-1, -1];

    }
}
