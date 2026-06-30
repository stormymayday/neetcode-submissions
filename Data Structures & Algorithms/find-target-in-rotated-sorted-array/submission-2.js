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

            if(target === nums[mid]) {
                return mid;
            }

            // Left Sorted Portion
            if(nums[mid] >= nums[left]) {
                if(target > nums[mid]) {
                    left = mid + 1;
                } else if(target < nums[mid] && target < nums[left]) {
                    left = mid + 1;
                } else {
                    // target is less than mid but greater than left
                    right = mid - 1;
                }
            }
            // Righ Sorted Portion
            else {
                if(target < nums[mid]) {
                    right = mid - 1;
                } else if(target > nums[mid] && target > nums[right]) {
                    right = mid - 1;
                } else {
                    // target is greater than mid but less than right
                    left = mid + 1;
                }
            }

        }

        return -1;

    }
}
