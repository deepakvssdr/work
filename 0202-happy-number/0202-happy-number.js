/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
       let map=new Map();
   while(n!=1){
    if(map.get(n)>1) return false;
    map.set(n,(map.get(n)||0)+1);
    let sum=0;
    while(n!=0){
        let r=n%10;
        sum=sum+r*r;
        n=Math.floor(n/10);
    }
    n=sum;
   } 
   return true;
};