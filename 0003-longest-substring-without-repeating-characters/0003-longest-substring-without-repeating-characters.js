/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0,right=0,len=0;
    let map=new Map();
    for(right=0;right<s.length;right++){
        map.set(s[right],(map.get(s[right])||0)+1);
        while(map.get(s[right])>1){
            map.set(s[left],map.get(s[left])-1);
            if(map.get(s[left])==0){
                map.delete(s[left]);
            }
            left++;
        }
        len=Math.max(len,right-left+1);
    }
    return len;
};