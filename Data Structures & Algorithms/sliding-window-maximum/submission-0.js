class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const result = [];

        let left = 0;
        for(let right  = k - 1; right < nums.length; right++) {

            result.push(Math.max(...nums.slice(left, right + 1)));
            left++;
            
        }

        return result;

    }
}
