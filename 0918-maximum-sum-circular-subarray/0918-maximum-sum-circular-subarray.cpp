class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int bestmax=-1e9;
        int maxsum=-1e9;
        int bestmin=1e9;
        int minsum=1e9;
        int totalsum=0;
        for(int i=0;i<nums.size();i++){
            totalsum+=nums[i];
            bestmax=max(nums[i],bestmax+nums[i]);
            maxsum=max(bestmax,maxsum);

            bestmin=min(nums[i],bestmin+nums[i]);
            minsum=min(bestmin,minsum);
            }

            if(maxsum<0){
                return maxsum;
        }
        return max(maxsum,totalsum-minsum);
    }
};