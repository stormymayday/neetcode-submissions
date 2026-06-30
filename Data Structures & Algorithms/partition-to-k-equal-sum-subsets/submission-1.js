class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {

        const n = nums.length;

        // Check if sum is divisble by k
        const sum = nums.reduce((acc, curr) => acc + curr, 0);
        if(sum % k !== 0) {
            return false;
        }

        // Optimization: sort in descending order
        const sorted = nums.sort((a, b) => b - a);
        // Calculate the 'bucket size'
        const bucketSize = sum / k;
        // Check if the largest element (first) is greater than the bucket size
        if(sorted[0] > bucketSize) {
            return false;
        }

        const buckets = new Array(k).fill(0);

        function helper(index) {
            if(index === n) {
                return true;
            }

            for(let j = 0; j < k; j += 1) {
                if(buckets[j] + sorted[index] <= bucketSize) {
                    buckets[j] += sorted[index];
                    if(helper(index + 1) === true) {
                        return true;
                    }
                    buckets[j] -= sorted[index];

                    // Optimization: if bucket is empty after backtracking,
                    // skip other empty buckets
                    if(buckets[j] === 0) {
                        break;
                    }
                }
            }

            return false;
        }

        return helper(0);

    }
}
