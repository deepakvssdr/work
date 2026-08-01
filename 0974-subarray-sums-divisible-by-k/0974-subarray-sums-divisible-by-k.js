/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let sum=0,res=0,freq,rem;
    let map=new Map([[0,1]]);
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        rem=sum%k;
        if(rem<0) rem+=k;
        res+=(map.get(rem)||0);
        map.set(rem,(map.get(rem)||0)+1);
    }
    return res;
};