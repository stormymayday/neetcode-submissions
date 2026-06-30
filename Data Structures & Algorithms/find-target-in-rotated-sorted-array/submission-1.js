class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Step 1: Find the rotation point (the minimum element) using binary search
        let left = 0;
        let right = nums.length - 1;
        while(left < right) {
            const mid = Math.floor((left+right)/2);
            // If the middle element is greater than the rightmost element,
            // the minimum must be in the right half
            if(nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // The minimum is in the left half (including mid)
                right = mid;
            }
        }

        // At this point, 'left' is the index of the minimum element (rotation point)
        const minIndex = left;

        // Step 2: Determine which segment of the array to search based on target value
        if(minIndex === 0) {
            // Array is not rotated, search the entire array
            left = 0;
            right = nums.length - 1;
        } else if(target >= nums[0] && target <= nums[minIndex - 1]) {
            // Target is in the left segment (from start to rotation point)
            left = 0;
            right = minIndex - 1;
        } else if(target >= nums[minIndex] && target <= nums[nums.length - 1]) {
            // Target is in the right segment (from rotation point to end)
            left = minIndex;
            right = nums.length - 1;
        } else {
            // If target is not in any valid range, 
            return -1;
        }

        // Step 3: Perform standard binary search on the determined segment
        while(left <= right) {
            const mid = Math.floor((left+right)/2);
            if(nums[mid] > target) {
                // Target is in the left half
                right = mid - 1;
            } else if(nums[mid] < target) {
                // Target is in the right half
                left = mid + 1;
            } else {
                // Target found
                return mid;
            }
        }

        // Target not found
        return -1;
    }
}
