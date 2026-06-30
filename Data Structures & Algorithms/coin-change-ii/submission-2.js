class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins, i = 0, memo = {}) {

        const key = `${amount},${i}`;

        if(key in memo) {
            return memo[key];
        }

        if(amount < 0) {
            return 0;
        }

        if(i >= coins.length) {
            return 0;
        }

        if(amount === 0) {
            return 1;
        }

        const takeCoin = this.change(amount - coins[i], coins, i, memo);
        const skipCoin = this.change(amount, coins, i + 1, memo);

        memo[key] = takeCoin + skipCoin;

        return memo[key];
    }
}
