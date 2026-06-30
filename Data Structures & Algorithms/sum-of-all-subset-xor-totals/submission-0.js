class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let res = 0;
        const subset = [];
        function helper(index) {
            if(index === nums.length) {
                let xor = 0;
                for(const num of subset) {
                    xor ^= num;
                }
                res += xor;
                return;
            }
            subset.push(nums[index]);
            helper(index + 1);
            subset.pop();
            helper(index + 1);
        }
        helper(0);
        return res;
    }
}
