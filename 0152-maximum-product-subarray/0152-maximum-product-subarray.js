/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let bestmax=nums[0];
    let bestmin=nums[0];
    let ans=nums[0];
    for(let i=1;i<nums.length;i++){
        let v1=bestmax*nums[i];
        let v2=bestmin*nums[i];
        let v3=nums[i];
        bestmax=Math.max(Math.max(v1,v2),v3);
        bestmin=Math.min(Math.min(v1,v2),v3);
        ans=Math.max(ans,Math.max(bestmax,bestmin));
    }
    return ans;
};