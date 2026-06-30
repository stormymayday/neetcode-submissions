class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        
        const n = nums.length;

        const sorted = [...nums].sort((a, b) => a - b);

        const set = new Set();

        for(let i = 0; i < n - 2; i += 1) {
            for(let j = i + 1; j < n - 1; j += 1) {
                for(let k = j + 1; k < n; k += 1) {
                    
                    if(sorted[i] + sorted[j] + sorted[k] === 0) {
                        // set.add(`${[sorted[i], sorted[j], sorted[k]]}`);
                        set.add(JSON.stringify([sorted[i], sorted[j], sorted[k]]));
                    }

                }
            }
        }

        // return Array.from(set).map((triplet) => triplet.split(",").map(Number));
        return Array.from(set).map((item) => JSON.parse(item));

    }
}
