class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums, i = 0) {
        if(i >= nums.length - 1) {
            return true;
        }

        const maxJumps = nums[i];
        for(let jumps = 1; jumps <= maxJumps; jumps += 1) {
            if(this.canJump(nums, i + jumps) === true) {
                return true;
            }
        }

        return false;
    }
}
