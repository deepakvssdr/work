/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let s1=intervals[0][0];
    let e1=intervals[0][1];
    let s2,e2;
    let res=[];
    for(let i=1;i<intervals.length;i++){
        s2=intervals[i][0];
        e2=intervals[i][1];
        if(e1>=s2){
            s1=s1;
            e1=Math.max(e1,e2);
            continue;
        }
        res.push([s1,e1]);
        s1=s2;
        e1=e2;
    }
    res.push([s1,e1]);
    return res;
};