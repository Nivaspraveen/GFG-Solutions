//{ Driver Code Starts
// Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
    int minCostCity(vector<vector<int>>& houses, int n) {
        int numHouses = houses.size();
        vector<bool> inMST(numHouses, false);
        vector<int> minCost(numHouses, numeric_limits<int>::max());
        minCost[0] = 0;
        int totalCost = 0;
        
        for (int count = 0; count < numHouses; count++) {
            int u = -1;
            for (int i = 0; i < numHouses; i++) {
                if (!inMST[i] && (u == -1 || minCost[i] < minCost[u])) u = i;
            }
            if (minCost[u] == numeric_limits<int>::max()) return -1;
            inMST[u] = true;
            totalCost += minCost[u];
            
            for (int v = 0; v < numHouses; v++) {
                if (!inMST[v]) {
                    int distance = abs(houses[u][0] - houses[v][0]) + abs(houses[u][1] - houses[v][1]);
                    minCost[v] = min(minCost[v], distance);
                }
            }
        }
        return totalCost;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m;
        cin >> n;
        vector<vector<int>> edges;

        for (int i = 0; i < n; ++i) {
            vector<int> temp;
            for (int j = 0; j < 2; ++j) {
                int x;
                cin >> x;
                temp.push_back(x);
            }
            edges.push_back(temp);
        }

        Solution obj;

        cout << obj.minCostCity(edges, n);
        cout << "\n";
        cout << "~" << endl;
    }
}

// } Driver Code Ends