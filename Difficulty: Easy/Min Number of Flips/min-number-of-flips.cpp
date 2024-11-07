//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

int minFlips (string s);
int32_t main()
{
    int t; cin >> t;
    while (t--)
    {
        string s; cin >> s;

        cout << minFlips (s) << endl;
    
cout << "~" << "\n";
}
}
// Contributed By: Pranay Bansal

// } Driver Code Ends


int minFlips (string S) {
    int flip1 = 0, flip2 = 0;
    for (int i = 0; i < S.size(); ++i) {
        char expFlip1 = (i % 2 == 0) ? '0' : '1', expFlip2 = (i % 2 == 0) ? '1' : '0';
        if (S[i] != expFlip1) ++flip1;
        if (S[i] != expFlip2) ++flip2;
    }
    return min(flip1, flip2);
}