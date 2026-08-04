/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let res=[];
    let i=0,j=0,a=0,b=0;
    let s1,s2,e1,e2;
    while(i<firstList.length&&j<secondList.length){
        s1=firstList[i][0];
        e1=firstList[i][1];
        s2=secondList[j][0];
        e2=secondList[j][1];
        if(s1<=s2){
            if(e1>=s2){
                a=Math.max(s1,s2);
                b=Math.min(e1,e2);
                res.push([a,b]);
            }
        }
        else{
            if(e2>=s1){
                a=Math.max(s1,s2);
                b=Math.min(e1,e2);
                res.push([a,b]);
            }
        }
        if(e1<=e2) i++;
        else j++;
    }
    return res;
};