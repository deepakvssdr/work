/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    profit=-Infinity,minn=prices[0];
    for(let i=1;i<prices.length;i++){
        profit=Math.max(profit,prices[i]-minn);
        minn=Math.min(minn,prices[i]);
    }
    return profit>0?profit:0;
};