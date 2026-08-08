/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let nums1=[];
    let n=nums.length;
   for(let i=0;i<2*n;i++){
    nums1.push(nums[i%n]);
   } 
   return nums1;
};