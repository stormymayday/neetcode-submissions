class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const n = nums.length;
        const sorted = nums.sort((a,b) => a - b);
        const result = [];
        const curSet = [];
        function helper(index) {
            if(index === n) {
                result.push([...curSet]);
                return;
            }
            curSet.push(sorted[index]);
            helper(index + 1);
            curSet.pop();
            while(index + 1 < n && sorted[index] === sorted[index + 1]) {
                index += 1;
            }
            helper(index + 1);
        }
        helper(0);
        return result;
    }
}
