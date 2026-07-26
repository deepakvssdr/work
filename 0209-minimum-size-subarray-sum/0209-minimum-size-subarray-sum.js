/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let low=0,high=0,sum=0,len=Infinity;
    for(high=0;high<nums.length;high++){
        sum+=nums[high];
        while(sum>=target){
            len=Math.min(len,high-low+1);
            sum=sum-nums[low];
            low++;
        }
    }
    return len==Infinity?0:len;
};