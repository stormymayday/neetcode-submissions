class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let result = 0;

        const sorted = nums.sort((a,b) => a - b);

        const set = new Set(sorted);

        let streak = 1;
        for(let num of set) {

            if(set.has(num + 1)) {
                streak++;
            } else {
                streak = 1;
            }

            result = Math.max(result, streak);

        }

        return result;
    }
}
