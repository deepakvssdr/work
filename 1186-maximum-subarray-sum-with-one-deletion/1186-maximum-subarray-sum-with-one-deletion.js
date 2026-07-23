/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let nodelete=arr[0];
    let onedelete=arr[0];
    let res=arr[0];
    for(let i=1;i<arr.length;i++){
        //let prevnodelete=nodelete;
        onedelete=Math.max(onedelete+arr[i],nodelete);
        nodelete=Math.max(nodelete+arr[i],arr[i]);
        res=Math.max(res,nodelete,onedelete);
    }
    return res;    
};