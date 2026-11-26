class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        map<int,int> mp;
        int low=0,high=0,len=0;
        for(high=0;high<fruits.size();high++){
            mp[fruits[high]]++;
            while(mp.size()>2){
                mp[fruits[low]]--;
                if(mp[fruits[low]]==0){
                    mp.erase(fruits[low]);
                }
                low++;
            }
            if(mp.size()<=2){
            len=max(len,high-low+1);
            }
        }
        return len;
    }
};