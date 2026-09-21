/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans=nums[0];
    let best=nums[0];
    for (let i=1;i<nums.length;i++){
        best=Math.max(nums[i],(best+nums[i]));
        ans=Math.max(ans,best);
    }
    return ans;
};