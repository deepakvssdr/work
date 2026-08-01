/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map=new Map();
    map.set(0,1);
    sum=0,res=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        let x=sum-k;
        let freq=map.get(x)||0;
        res=res+freq;
        map.set(sum,(map.get(sum)||0)+1);
    }
    return res;
};