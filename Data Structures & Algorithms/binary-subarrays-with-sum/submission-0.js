class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        let count = 0;
        for(let i = 0; i < nums.length; i += 1) {
            let currSum = 0;
            for(let j = i; j < nums.length; j += 1) {

                currSum += nums[j];

                if(currSum === goal) {
                    count += 1;
                } 

                if(currSum > goal) {
                    break;
                }

            }
        }
        return count;
    }
}
