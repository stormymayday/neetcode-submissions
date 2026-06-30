class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        for(let i = 0; i < nums.length; i += 1) {
            let prod = 1;
            for(let j = 0; j < nums.length; j+= 1) {
                if(i !== j) {
                    prod *= nums[j];
                }
            }
            result.push(prod);
        }
        return result;
    }
}
