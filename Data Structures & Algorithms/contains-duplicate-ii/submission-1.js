class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        for(let i = 0; i < nums.length; i += 1) {

            for(let j = i + 1; j < nums.length && j < i + k + 1; j += 1) {
                
                if(nums[i] === nums[j]) {
                    return true;
                }

            }

        }

        return false;

    }
}
