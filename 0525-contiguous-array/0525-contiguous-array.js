/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map=new Map();
    let zero=0,one=0,res=0,diff;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) zero++;
        else one++;
        //diff=zero-one;
        if(zero-one==0){
            res=Math.max(res,i+1);
            continue;
        }
        if(!map.has(zero-one)){
            map.set(zero-one,i);
        }
        else{
            let index=map.get(zero-one);
            let len=i-index;
            res=Math.max(res,len);
        }
    }
    return res;
};