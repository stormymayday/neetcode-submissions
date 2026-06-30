class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const result = [];
        const prefixArray = [];
        const postfixArray = [];

        let prefix = 1;
        for(let i = 0; i < nums.length; i++) {
            prefixArray.push(prefix);
            prefix *= nums[i];
        }

        let postfix = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            postfixArray[i] = postfix;
            postfix *= nums[i];
        }

        for(let i = 0; i < nums.length; i++) {
            result[i] = prefixArray[i] * postfixArray[i];
        }

        return result;

    }
}
