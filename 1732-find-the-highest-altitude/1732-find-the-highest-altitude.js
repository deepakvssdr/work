/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum=0,res=-Infinity;
    for(let i=0;i<gain.length;i++){
        sum+=gain[i];
        res=Math.max(res,sum);
    }
    return res>0?res:0;
};