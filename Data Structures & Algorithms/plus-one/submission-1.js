class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {

        digits.reverse();

        let carry = 1;
        let idx = 0;

        while(carry > 0 && idx < digits.length) {

            if(digits[idx] === 9) {
                digits[idx] = 0;
            } else {
                digits[idx] = digits[idx] + 1;
                carry -= 1;
            }

            idx += 1;

        }

        if(carry === 1) {
            digits.push(1);
        }

        return digits.reverse();

    }
}
