class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const result = this.helper(amount, coins);
        if(result === Infinity) {
            return -1;
        } else {
            return result;
        }
    }

    helper(amount, coins, memo = {}) {

        if(amount in memo) {
            return memo[amount];
        }

        if(amount < 0) {
            return Infinity;
        }
        if(amount === 0) {
            return 0;
        }

        let minCoins = Infinity;
        for(const coin of coins) {
            minCoins = Math.min(minCoins, 1 + this.helper(amount - coin, coins, memo));
        }
        
        memo[amount] = minCoins;
        return minCoins;
    }
}
