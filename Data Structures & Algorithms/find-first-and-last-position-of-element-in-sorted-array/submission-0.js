class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {

        let res = [-1, -1];

        for(let i = 0; i < nums.length; i += 1) {

            if(nums[i] === target && res[0] === -1) {
                res[0] = i;
                res[1] = i;
            } else if(nums[i] === target && res[0] !== -1) {
                res[1] = i
            } else if(nums[i] > target) {
                break;
            }

        }

        return res;
    }
}
