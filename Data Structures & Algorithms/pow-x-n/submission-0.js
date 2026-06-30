class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {

        // Edge Case: n === 0
        if(n === 0) {
            return 1;
        }

        let res = x;

        for(let i = 1; i < Math.abs(n); i += 1) {

            res *= x;

        }

        if(n < 0) {
            return 1 / res;
        } else {
            return res;
        }

    }
}
