class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length; i++) {

            if(nums[i + 1] !== undefined && nums[i] === nums[i+1]) {
                return true;
            }

        }
        return false;

    }
}
