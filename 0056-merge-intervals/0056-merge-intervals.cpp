class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(),intervals.end());
        int s1,s2,e1,e2;
        s1=intervals[0][0],e1=intervals[0][1];
        vector<vector<int>> result;
        for(int i=1;i<intervals.size();i++){
            s2=intervals[i][0];
            e2=intervals[i][1];
            if(e1>=s2){
                //s1=s1;
                e1=max(e1,e2);
                continue;
            }
            result.push_back({s1,e1});
            s1=s2;
            e1=e2;
        }
        result.push_back({s1,e1});
        return result;
    }
};