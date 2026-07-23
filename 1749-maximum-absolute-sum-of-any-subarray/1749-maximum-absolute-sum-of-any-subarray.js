/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let best1=nums[0],res=nums[0],best2=nums[0];
    for(let i=1;i<nums.length;i++){
        best1=Math.max(best1+nums[i],nums[i]);
        best2=Math.min(best2+nums[i],nums[i]);
        res=Math.max(res,Math.abs(best2),best1);
    }
    return Math.abs(res);

};