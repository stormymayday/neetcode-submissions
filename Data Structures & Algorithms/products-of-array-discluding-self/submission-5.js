class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length);

        for(let i = 0; i < nums.length; i += 1) {
            let product = 1;
            for(let j = 0; j < nums.length; j += 1) {

                if(i !== j) {
                    product *= nums[j];
                }

            }
            res[i] = product;
        }

        return res;
    }
}
