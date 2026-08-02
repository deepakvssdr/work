/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
   let map=new Map();
   let zero=0,one=0,diff,res=0;
   for(let i=0;i<nums.length;i++){
    if(nums[i]==0) zero++;
    else one++;
    diff=zero-one;
    if(diff==0){
        res=Math.max(res,i+1);
        continue;
    }
    if(!map.has(diff)){
        map.set(diff,i);
    }
    else{
        let index=map.get(diff);
        let len=i-index;
        res=Math.max(res,len);
    }
   }
return res;
};