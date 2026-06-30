class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        for(let i = 0; i < prices.length - 1; i++) {
            for(let j = i + 1; j < prices.length; j++) {

                let currentDifference = prices[j] - prices[i];

                profit = Math.max(profit, currentDifference);

            }
        }

        return profit;
    }
}
