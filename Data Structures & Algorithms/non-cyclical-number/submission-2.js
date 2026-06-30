class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    constructor() {
        this.hashSet = new Set();
    }

    isHappy(n) {
        
        const sum = this.sumSquaresOfDigits(this.getDigits(n));

        if(sum === 1) {
            return true;
        } else {
            if(this.hashSet.has(sum)) {
                return false;
            } else {
                this.hashSet.add(sum);

                return this.isHappy(sum);

            }
        }

    }

    getDigits(n) {
        return String(n).split("").map(Number);
    }

    sumSquaresOfDigits(digits) {
        let sum = 0;
        for(const digit of digits) {
            sum += digit * digit;
        }
        return sum;
    }
}
