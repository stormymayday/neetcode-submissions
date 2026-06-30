class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const seen = new Set();

        for(const num of nums) {
            if(seen.has(num)) {
                return true;
            } else {
                seen.add(num);
            }
        }

        return false;

    }
}
