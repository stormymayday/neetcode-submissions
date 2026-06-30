class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        const n = nums.length;

        const res = new Set();

        for(let i = 0; i < n; i += 1) {
            
            let count = 0;
            for(let j = 0; j < n; j += 1) {

                if(nums[i] === nums[j]) {
                    count += 1;
                    if(count > n / 3) {
                        res.add(nums[i]);
                        break;
                    }
                }

            }

        }

        return Array.from(res);

    }
}
