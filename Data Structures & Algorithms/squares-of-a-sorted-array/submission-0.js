class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {

        const n = nums.length;

        // Why res is not being sorted here?
        // It is being sorted, but 'squaring' during the next step break the sorted order
        // Negative numbers will become positive
        // const res = [...nums].sort((a, b) => a - b);
        const res = [...nums].sort((a, b) => a - b);

        for(let i = 0; i < n; i += 1) {

            res[i] = res[i] * res[i];

        }

        return res.sort((a, b) => a - b);
    }
}
