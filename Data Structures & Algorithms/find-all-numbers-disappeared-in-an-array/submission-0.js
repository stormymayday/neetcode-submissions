class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {

        const res = [];

        for(let i = 1; i <= nums.length; i += 1) {

            let found = false;
            for(let j = 0; j < nums.length; j += 1) {
                if(i === nums[j]) {
                    found = true;
                    break;
                }
            }

            if(found === false) {
                res.push(i);
            }

        }

        return res;

    }
}
