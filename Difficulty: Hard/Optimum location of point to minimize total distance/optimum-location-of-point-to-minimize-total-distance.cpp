//{ Driver Code Starts
/* Driver program to test above function */

#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++
class Solution{
    public:
    double findOptimumCost(tuple<int,int,int>l, vector<pair<int,int>>p, int n){
	    int a = get<0>(l), b = get<1>(l), c = get<2>(l);
	    const double EPSILON = 1e-7;
	    
	    auto totalDistance = [&](double x, double y) {
	        double total = 0;
	        for (const auto& point : p) {
	            double px = point.first, py = point.second;
	            total += sqrt((px - x) * (px - x) + (py - y) * (py - y));
	        }
	        return total;
	    };
	    
	    auto findOptimalPoint = [&](double a, double b, double c) {
	        double leftX = -1000, rightX = 1000;
	        while (rightX - leftX > EPSILON) {
	            double midX1 = leftX + (rightX - leftX) / 3;
	            double midX2 = rightX - (rightX - leftX) / 3;
	            double y1 = -(a * midX1 + c) / b;
	            double y2 = -(a * midX2 + c) / b;
	            double dist1 = totalDistance(midX1, y1);
	            double dist2 = totalDistance(midX2, y2);
	            
	            if (dist1 < dist2) rightX = midX2;
	            else leftX = midX1;
	        }
	        double optimalX = (leftX + rightX) / 2;
	        double optimalY = -(a * optimalX + c) / b;
	        return make_pair(optimalX, optimalY);
	    };
	    pair<double, double> optimalPoint = findOptimalPoint(a, b, c);
	    return totalDistance(optimalPoint.first, optimalPoint.second);
    }
};


//{ Driver Code Starts.
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
	    tuple<int,int,int>line;
	    int a, b, c;
	    cin >> a >> b >> c;
	    line = make_tuple(a, b, c);
	    int n;
	    cin >> n;
	    vector<pair<int,int>>points;
	    for(int i = 0 ; i < n; i++){
	        int x, y;
	        cin >> x >> y;
	        points.push_back({x, y});
	    }

	    Solution ob;
	    double ans = ob.findOptimumCost(line, points, n);

	    cout << fixed << setprecision(2) << ans << endl;
	
cout << "~" << "\n";
}
	return 0;
}

// } Driver Code Ends