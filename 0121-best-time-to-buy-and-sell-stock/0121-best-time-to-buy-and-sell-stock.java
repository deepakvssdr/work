class Solution {
    public int maxProfit(int[] prices) {
        int res=Integer.MIN_VALUE;
        int min=prices[0];
        for(int i=1;i<prices.length;i++){
            res=Math.max(prices[i]-min,res);
            min=Math.min(prices[i],min);
        }
        return res>0?res:0;
    }
}