class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        intervals.push_back({newInterval});
        sort(intervals.begin(),intervals.end());
        int s1,s2,e1,e2;
        s1=intervals[0][0];
        e1=intervals[0][1];
        vector<vector<int>> res;
        for(int i=1;i<intervals.size();i++){
            s2=intervals[i][0];
            e2=intervals[i][1];
            if(e1>=s2){
                e1=max(e1,e2);
                continue;
            }
            res.push_back({s1,e1});
            s1=s2;
            e1=e2;
        }
        res.push_back({s1,e1});
        return res;
    }
};