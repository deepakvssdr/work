/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum=0,left=0,right=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    for(let i=0;i<nums.length;i++){
        right=sum-left-nums[i];
        if(right==left) return i;
        left+=nums[i];
    }
    return -1;
};