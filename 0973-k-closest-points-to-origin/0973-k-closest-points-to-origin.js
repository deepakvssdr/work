/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let sum=0;
    let p=new Array();
    let ans=new Array();
    for(let i=0;i<points.length;i++){
        sum=points[i][0]**2+points[i][1]**2;
        p.push([sum,i]);
    }
    p.sort((a,b)=>a[0]-b[0]);
    for(let i=0;i<k;i++){
        ans.push(points[p[i][1]]);
    }
    return ans;
};