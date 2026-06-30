class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        const n = nums.length;

        const res = new Set();

        outer: for(let i = 0; i < n; i += 1) {

            // The items was previously identified as a majority element
            if(res.has(nums[i])) {
                continue;
            }
            
            let count = 0;
            for(let j = 0; j < n; j += 1) {

                if(nums[i] === nums[j]) {
                    count += 1;
                    if(count > n / 3) {
                        res.add(nums[i]);
                        if(res.size === 2) {
                            // There can be no more than 2 majority elements
                            break outer;
                        } else {
                            // break from inner
                            break;
                        }   
                    }
                }

            }

        }

        return Array.from(res);

    }
}
