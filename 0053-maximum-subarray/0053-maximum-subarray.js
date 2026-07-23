/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let best=nums[0];
    let ans=nums[0];
    let v1=0,v2=0;
    for(let i=1;i<nums.length;i++){
        v1=best+nums[i];
        v2=nums[i];
        best=Math.max(v1,v2);
        ans=Math.max(best,ans);
    }
    return ans;
};