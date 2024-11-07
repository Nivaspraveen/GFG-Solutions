//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    int negaBit(int F , int S) {
        int i = 0;
        while (F > 0) {
            if (F & 1) S = S ^ (1 << i);
            F = F >> 1;
            i++;
        }
        return S;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int F,S;

        cin>>F>>S;

        Solution ob;
        cout << ob.negaBit(F,S) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends