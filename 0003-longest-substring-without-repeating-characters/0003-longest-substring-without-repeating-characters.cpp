class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int left=0,right=0,len=0;
        map<char,int> mp;
        for(right=0;right<s.length();right++){
            mp[s[right]]++;
            while(mp[s[right]]>1){
                mp[s[left]]--;
                if(mp[s[left]]==0){
                    mp.erase(s[left]);}
                    left++;
            }
            len=max(len,right-left+1);
        }
        return len;
        
    }
};