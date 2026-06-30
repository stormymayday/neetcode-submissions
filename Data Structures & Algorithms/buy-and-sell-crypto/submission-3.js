class Solution {
    /**
     * Finds the maximum profit from buying and selling a stock once.
     * Uses a single pass approach with a two-pointer technique.
     * 
     * @param {number[]} prices - Array of stock prices, where prices[i] is the price on day i.
     * @return {number} Maximum profit that can be achieved, or 0 if no profit is possible.
     */
    maxProfit(prices) {
        let profit = 0; // Initialize max profit to 0

        // If there are less than 2 days, profit is not possible
        if (prices.length < 2) {
            return profit;
        }

        let buy = 0; // Pointer to track the minimum price index (buy day)

        // Iterate through the array, treating each index as a potential selling day
        for (let sell = 1; sell < prices.length; sell++) {
            if (prices[sell] < prices[buy]) {
                // Update the buy index if a lower price is found
                buy = sell;
            } else {
                // Calculate profit if selling on the current day
                profit = Math.max(profit, prices[sell] - prices[buy]);
            }
        }

        return profit; // Return the maximum profit found
    }
}
