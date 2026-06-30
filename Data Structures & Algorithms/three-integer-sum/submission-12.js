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

            // will be adding nums[j]
            const jSet = new Set();

            for (let j = i + 1; j < n; j += 1) {

                const third = -(sorted[i] + sorted[j]);

                if (jSet.has(third)) {
                    // triplets.add(JSON.stringify([nums[i], nums[j], third].sort((a, b) => a - b)));
                    triplets.add(JSON.stringify([sorted[i], sorted[j], third]));
                }

                // jSet.add(nums[j]);
                jSet.add(sorted[j]);

            }
        }

        return Array.from(triplets).map(triplet => JSON.parse(triplet));

    }
}
