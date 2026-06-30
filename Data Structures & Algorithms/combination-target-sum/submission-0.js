class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const curList = [];
        let curSum = 0;
        function helper(index) {
            if(index === nums.length || curSum > target) {
                return;
            }

            if(curSum === target) {
                result.push([...curList]);
                return;
            }

            curList.push(nums[index]);
            curSum += nums[index];
            helper(index);

            curList.pop();
            curSum -= nums[index];
            helper(index + 1);

        }
        helper(0);
        return result;
    }
}
