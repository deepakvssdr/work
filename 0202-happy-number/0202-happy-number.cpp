class Solution {
public:
    bool isHappy(int n) {
        
        map<int,int> mp;
        while(n!=1){
            
            if(mp[n]>1){
                return false;
            } 
            mp[n]++;

            int r,sum=0;
            while(n!=0){
            r=n%10;
            sum=sum+r*r;
            n=n/10;
            }
            n=sum;
        }
        return true;
    }
};