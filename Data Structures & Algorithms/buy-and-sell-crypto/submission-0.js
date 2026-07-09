class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            let price = prices[i];
            if (price < minPrice) {
                minPrice = price;
            }

            let currProfit = price - minPrice;
            if (currProfit > maxProfit) {
                maxProfit = currProfit;
            }
        }

        return maxProfit;
    }
}
