class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const n = nums.length;

        const sorted = [...nums].sort((a, b) => a - b);

        const res = [];

        for(let i = 0; i < n - 2; i += 1) {

            if(i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

            for(let j = i + 1; j < n - 1; j += 1) {

                if(j > i + 1 && sorted[j] === sorted[j - 1]) {
                    continue;
                }

                for(let k = j + 1; k < n; k += 1) {

                    if(k > j + 1 && sorted[k] === sorted[k - 1]) {
                        continue;
                    }

                    if(sorted[i] + sorted[j] + sorted[k] === 0) {
                        res.push([sorted[i], sorted[j], sorted[k]]);
                    }

                }

            }

        }

        return res;

    }
}
