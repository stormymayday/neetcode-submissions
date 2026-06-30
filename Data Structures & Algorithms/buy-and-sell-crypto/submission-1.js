class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let profit = 0;

        if(prices.length < 2) {
            return profit;
        }

        let buy = 0;
        for(let sell = 1; sell < prices.length; sell++) {

            if(prices[buy] > prices[sell]) {
                buy = sell;
            } else {
                profit = Math.max(profit, prices[sell] - prices[buy]);
            }

        }

        return profit;

    }
}
