class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let left = 0;
        let right = nums.length - 1;
        let candidate = 0;

        while(left <= right) {

            const mid = left + Math.floor((right - left) / 2);

            // value at 'mid' is greater than or equals to value at 'left'
            if(nums[mid] >= nums[left]) {

                // value at 'mid' is greater than value at 'left' AND 'right'
                if(nums[mid] > nums[right]) {
                    // min is on the 'right'
                    left = mid + 1;
                } else {
                    // array is sorted?
                    // value at mid is greater than or equals to value at left
                    // AND value at mid is less than value at right
                    
                    if(nums[candidate] > nums[left]) {
                        candidate = left;
                    }
                    
                    break;
                }

            }
            // Otherwise, value at 'mid' is stricly less than value at 'left'
            else if(nums[mid] < nums[left]) {
                
                // Update min
                if(nums[candidate] > nums[mid]) {
                    candidate = mid;
                }

                // We can always discard here
                right = mid - 1;

            }

        }

        return nums[candidate];

    }
}
