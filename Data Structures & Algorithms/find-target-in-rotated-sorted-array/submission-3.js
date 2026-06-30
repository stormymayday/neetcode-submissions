class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            const mid = Math.floor((left+right)/2);

            // Check if we found the target directly
            if(target === nums[mid]) {
                return mid;
            }

            // Left Sorted Portion
            if(nums[mid] >= nums[left]) {
                // Case 1: If target is greater than the middle element,
                // then it cannot be in the left sorted portion (which ends at mid)
                if(target > nums[mid]) {
                    // Search right
                    left = mid + 1;
                } 
                // Case 2: If target is less than middle element AND less than the leftmost element
                else if(target < nums[mid] && target < nums[left]) {
                    // Search right
                    left = mid + 1;
                } 
                // Case 3: If target is less than middle element but greater than or equal to leftmost element,
                else {
                    // Search left
                    right = mid - 1;
                }
            }
            // Right Sorted Portion
            else {
                // Case 1: If target is less than the middle element,
                // then it cannot be in the right sorted portion (which starts at mid)
                if(target < nums[mid]) {
                    // Search left
                    right = mid - 1;
                } 
                // Case 2: If target is greater than middle element AND greater than the rightmost element
                else if(target > nums[mid] && target > nums[right]) {
                    // Search left
                    right = mid - 1;
                } 
                // Case 3: If target is greater than middle element but less than or equal to rightmost element,
                else {
                    // Search right
                    left = mid + 1;
                }
            }
        }

        // Target wasn't found in the array
        return -1;
    }
}
