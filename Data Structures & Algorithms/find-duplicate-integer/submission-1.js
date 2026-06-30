class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let slow = 0;
        let fast = 0;

        // Phase One: Find the meeting point
        while(true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if(slow === fast){
                break;
            }
        }

        // Phase Two: Find the begining of the cycle
        let left = 0;
        let right = slow;
        while(left !== right) {
            left = nums[left];
            right = nums[right];
        }

        return left;

    }
}
