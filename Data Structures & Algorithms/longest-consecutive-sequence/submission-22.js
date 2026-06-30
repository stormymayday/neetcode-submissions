class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let result = 0;

        if(nums.length === 0) {
            return result;
        }

        const set = new Set(nums);

        for(const num of set) {

            if(!set.has(num - 1)) {

                let currentNum = num;
                let streak  = 0;
                while(set.has(currentNum)) {
                    streak++;
                    currentNum++;
                }
                result = Math.max(streak, result);

            }

        }

        return result;
    }
}
