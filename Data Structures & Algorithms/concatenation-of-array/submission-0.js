class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        const n = nums.length;

        const res = new Array(n * 2);

        let idx = 0;

        for(let i = 0; i < (n * 2); i += 1) {

            res[i] = nums[i % n];

        }

        return res;
    }
}
