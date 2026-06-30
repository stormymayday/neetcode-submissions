class Solution {
    /**
     * Finds the maximum profit from buying and selling a stock once.
     * Uses a brute-force approach by checking all possible buy-sell pairs.
     * 
     * @param {number[]} prices - Array of stock prices, where prices[i] is the price on day i.
     * @return {number} Maximum profit that can be achieved, or 0 if no profit is possible.
     */
    maxProfit(prices) {
        let profit = 0; // Initialize max profit to 0

        // Iterate through all possible buying days
        for (let i = 0; i < prices.length - 1; i++) {
            // Iterate through all possible selling days after the current buying day
            for (let j = i + 1; j < prices.length; j++) {
                // Calculate the profit if buying on day i and selling on day j
                let currentDifference = prices[j] - prices[i];

                // Update the maximum profit if the current profit is greater
                profit = Math.max(profit, currentDifference);
            }
        }

        return profit; // Return the maximum profit found
    }
}
