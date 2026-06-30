class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const set = new Set();

        for(let i = 0; i < nums.length; i++) {

            const currentNum = nums[i];

            if(set.has(currentNum)) {
                return currentNum;
            }

            set.add(currentNum);
        }
    }
}
