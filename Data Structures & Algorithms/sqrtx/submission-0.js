class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {

        let left = 0;
        let right = x;
        let candidate = 0;

        while(left <= right) {

            const middle = left + Math.floor((right - left) / 2);

            if((middle * middle) > x) {
                right = middle - 1;
            } else if((middle * middle) < x) {
                candidate = middle;
                left = middle + 1;
            } else {
                return middle
            }

        }

        return candidate;

    }
}
