/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let bestmax=-Infinity;
    let maxsum=-Infinity;
    let bestmin=Infinity;
    let minsum=Infinity;
    let totalsum=0;
    for(let i=0;i<nums.length;i++){
        totalsum+=nums[i];
        bestmax=Math.max(bestmax+nums[i],nums[i]);
        maxsum=Math.max(maxsum,bestmax);

        bestmin=Math.min(bestmin+nums[i],nums[i]);
        minsum=Math.min(minsum,bestmin);
    }
    if(maxsum<0){
        return maxsum;
    }

    return Math.max(maxsum,totalsum-minsum);
};