class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {

        let smallestSum = Math.max(...nums);

        while(true) {
            if(this.possibleToSplit(nums, k, smallestSum) === true) {
                break;
            } else {
                smallestSum += 1;
            }
        }

        return smallestSum;

    }

    possibleToSplit(nums, k, maxSum) {

        let subarrays = 1;
        let currSum = 0;

        for(let i = 0; i < nums.length; i += 1) {

            if(currSum + nums[i] <= maxSum) {
                currSum += nums[i];
            } else {
                subarrays += 1;
                currSum = nums[i];
            }

        }

        return subarrays <= k;

    }
}
