/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j=0;k=s.length-1;
    while(j<k){
        let i=s[j];
        s[j]=s[k];
        s[k]=i;
        j++,k--;
    }
    return s;
};