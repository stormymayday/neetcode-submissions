class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const n = nums.length;
        const sorted = [...nums].sort((a, b) => a - b);
        const triplets = new Set();

        for (let i = 0; i < n; i += 1) {
            const jSet = new Set();

            for (let j = i + 1; j < n; j += 1) {
                const third = -(sorted[i] + sorted[j]);

                if (jSet.has(third)) {
                    // No need to sort since array is already sorted!
                    triplets.add(`${sorted[i]},${sorted[j]},${third}`);
                }

                jSet.add(sorted[j]);
            }
        }

        return Array.from(triplets).map(triplet => 
            triplet.split(',').map(Number)
        );

    }
}
