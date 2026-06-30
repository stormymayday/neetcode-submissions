class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const hashMap = {};

        for(let i = 0; i < nums.length; i++) {

            let difference = target - nums[i];

            if(hashMap[difference] !== undefined) {
                return [i, hashMap[difference]];
            } else {
                hashMap[nums[i]] = i;
            }

        }

    }
}
