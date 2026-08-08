/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans=[];
    let n=nums.length;
   for(let i=0;i<2*n;i++){
    ans.push(nums[i%n]);
   } 
   return ans;
};