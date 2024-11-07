//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution{
    public:
    int solve(int n, int k, vector<int>& arr){
        vector<int> dp(n, 0);
        
        for (int i = 0; i < n; i++) {
            int maxValue = arr[i];
            for (int j = 1; j <= k && i - j + 1 >= 0; j++) {
                maxValue = max(maxValue, arr[i - j + 1]);
                if (i - j >= 0) dp[i] = max(dp[i], (j * maxValue) + dp[i - j]);
                else dp[i] = max(dp[i], j * maxValue); 
            }
        }
        return dp[n - 1];
    }
};

//{ Driver Code Starts.
int main()
{
    int t;
    cin>>t;
    while(t--){
        int n,k; cin>>n>>k;
        vector<int> arr;
        
        for(int i=0; i<n; ++i){
            int x; cin>>x;
            arr.push_back(x);
        }
        
        Solution obj;
        cout<<obj.solve(n,k,arr)<<"\n";
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends