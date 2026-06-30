class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {

        // Phase 1: Binary search to find x or closest element to x
        let left = 0;
        let right = arr.length - 1;
        let closest = 0;
        while(left <= right) {

            const mid = left + Math.floor((right - left) / 2);

            // Udpate 'closes' if absolute difference is smaller
            if( Math.abs(x - arr[closest]) > Math.abs(x - arr[mid]) ) {
                closest = mid;
            }
            
            if(x < arr[mid]) {
                right = mid - 1;
            } else if(x > arr[mid]) {
                left = mid + 1;
            } else {
                closest = mid;
                break;
            }
        }

        left = closest;
        right = closest;
        while(right - left + 1 < k) {

            if( 
                // left - 1 and right + 1 are in bounds
                left - 1 >= 0 &&
                right + 1 <= arr.length - 1
                ) {
                    // if value at left - 1 is closer to 'x'
                    // (the absolute difference is lower)
                    if(Math.abs(x - arr[left - 1]) < Math.abs(x - arr[right + 1])) {
                        // choose left - 1
                        left -= 1;
                    } 
                    // if value at right + 1 is closer to 'x'
                    else if(Math.abs(x - arr[left - 1]) > Math.abs(x - arr[right + 1])) {
                        right += 1;
                    } 
                    // absolute differenes are equal, choose the smaller value
                    else {
                        // which is left - 1 since array is sorted
                        left -= 1;
                    }

                } 
                // either left or right are out of bounds
                // check if left is in bounds
                else if(left - 1 >= 0) {
                    left -= 1;
                } 
                // check if right is in bounds
                else if(right + 1 <= arr.length - 1) {
                    right += 1;
                } 
                // both will be out of bounds
                else {
                    break;
                }

        }

        return arr.slice(left, right + 1);

    }
}
