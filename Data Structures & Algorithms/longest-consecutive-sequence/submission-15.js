class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let result = 0;

        const set = new Set(nums);

        for(let num of set) {
            
            // beginning
            if(!set.has(num - 1)) {
                let streak = 0;
                while(set.has(num)) {
                    streak++;
                    num++;
                }
                result = Math.max(result, streak);
            }

        }

        return result;

    }
}
