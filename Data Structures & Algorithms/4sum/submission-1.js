class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {

        const n = nums.length;

        nums.sort((a, b) => a - b);

        const res = new Set();

        for(let i = 0; i < n - 3; i += 1) {

            for(let j = i + 1; j < n - 2; j += 1) {

                for(let k = j + 1; k < n - 1; k += 1) {

                    for(let l = k + 1; l < n; l += 1) {

                        if(nums[i] + nums[j] + nums[k] + nums[l] === target) {

                            res.add(JSON.stringify([nums[i], nums[j], nums[k], nums[l]]));

                        }

                    }

                }

            }

        }

        return Array.from(res).map((quadruplet) => JSON.parse(quadruplet));

    }
}
