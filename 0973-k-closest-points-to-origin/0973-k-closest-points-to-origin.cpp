class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
       vector <vector<int>> p;
       vector <vector<int>> ans;
       int sum;
       for(int i=0;i<points.size();i++){
            sum=pow(points[i][0],2)+pow(points[i][1],2);
            p.push_back({sum,i});
       }
       sort(p.begin(),p.end());
       for(int j=0;j<k;j++){
        ans.push_back(points[p[j][1]]);
       }
       return ans;
    }
};