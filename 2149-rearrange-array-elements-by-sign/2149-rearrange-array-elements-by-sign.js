/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let p=0,n=1;
    let res=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res[p]=nums[i];
            p=p+2;
        }
        else{
            res[n]=nums[i];
            n=n+2;
        }
    }
    return res;
};