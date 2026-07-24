/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left=0,right=0,sum=0,len=Infinity;
    for(right=0;right<nums.length;right++){
        sum+=nums[right];
        while(sum>=target){
            len=Math.min(len,right-left+1);
            sum-=nums[left];
            left++;
        }
    }
    return len==Infinity?0:len;
};