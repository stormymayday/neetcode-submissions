class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        // Initialize result with the first element as a starting point
        let result = nums[0];

        // Set up binary search boundaries
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            // If the current subarray is already sorted
            if(nums[left] < nums[right]) {
                // then the minimum is at the left pointer
                result = Math.min(result, nums[left]);
                break;
            }

            // Calculate middle index
            const mid = Math.floor((left + right ) / 2);
            // Keep track of the minimum value seen so far
            result = Math.min(result, nums[mid]);
            // Determine which half to search next:
            if(nums[mid] >= nums[left]) {
                // Left portion is sorted normally, so minimum must be in right half
                // (or we've already found it with our running minimum)
                left = mid + 1;
            } else {
                // Right portion is sorted normally, so minimum must be in left half
                // (including the middle element we just checked)
                right = mid - 1;
            }

        }

        return result;

    }
}
