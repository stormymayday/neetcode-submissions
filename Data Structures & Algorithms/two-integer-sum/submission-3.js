class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        if(nums.length < 2) {
            return null;
        }

        const hashMap = {};

        for(let i = 0; i < nums.length; i++) {

            const difference = target - nums[i];

            if(hashMap[difference] === undefined) {
                hashMap[nums[i]] = i;
            } else {
                return [i, hashMap[difference]];
            }

        }

        return null;

    }
}
