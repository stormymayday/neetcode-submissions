class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let result = 0;

        const hashSet = new Set(nums);

        for(const num of nums) {

            let currentNum = num;
            let streak = 0;

            while(hashSet.has(currentNum)) {
                streak++;
                currentNum++;
            }

            result = Math.max(result, streak);

        }

        return result;

    }
}
