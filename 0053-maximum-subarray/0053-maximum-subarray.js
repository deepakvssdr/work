/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let best=nums[0];
    let ans=nums[0];
    let v1=0,v2=0;
    for(let i=1;i<nums.length;i++){       
        best=Math.max((best+nums[i]),nums[i]);
        ans=Math.max(best,ans);
    }
    return ans;
};