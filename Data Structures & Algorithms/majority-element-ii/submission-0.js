class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        const n = nums.length;

        const res = new Set();

        const freqMap = new Map();

        for(let i = 0; i < n; i += 1) {

            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);

            if(freqMap.get(nums[i]) > n / 3) {
                res.add(nums[i]);
            }

        }

        return Array.from(res);

    }
}
