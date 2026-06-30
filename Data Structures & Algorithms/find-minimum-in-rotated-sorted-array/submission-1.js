class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let result = nums[0];

        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {

            if(nums[left] < nums[right]) {
                result = Math.min(result, nums[left]);
                break;
            }

            const mid = Math.floor((left + right ) / 2);
            result = Math.min(result, nums[mid]);
            if(nums[mid] >= nums[left]) {
                // search right
                left = mid + 1;
            } else {
                // search left
                right = mid - 1;
            }

        }

        return result;

    }
}
