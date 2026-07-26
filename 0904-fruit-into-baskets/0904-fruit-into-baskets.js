/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map=new Map();
    let low=0,high=0,len=-Infinity;
    for(high=0;high<fruits.length;high++){
        map.set(fruits[high],(map.get(fruits[high])||0)+1);
        while(map.size>2){
            map.set(fruits[low],map.get(fruits[low])-1);
            if(map.get(fruits[low])==0){
                map.delete(fruits[low]);
            }
            low++;
        }
        len=Math.max(len,high-low+1);
    }
    return len==-Infinity?1:len;
};