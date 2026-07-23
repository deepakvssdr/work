/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let a=[];
    for(let i=0;i<s1.length;i++){
        if(s1[i]!=s2[i]){
            a.push(i);
        }
    }

    if(a.length===0){
        return true;
    }

    if(a.length!==2||a.length>2){
        return false;
    }

    let j=a[0];
    let k=a[1];
    return s1[j]==s2[k]&&s1[k]==s2[j];
};