/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map=new Map([[0,1]]);
    let sum=0,res=0,rem=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        rem=sum-k;
        freq=map.get(rem)||0;
        res+=freq;
        map.set(sum,(map.get(sum)||0)+1);
    }
    return res;
    };