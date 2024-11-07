//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    long long divisorProduct(long long N) {
        const int mod = 1000000007;
        long long product = 1;
        for (int i = 1; i <= sqrt(N); i++) {
            if (N % i == 0) {
                product = (product * i) % mod;
                if (i != N / i) product = (product * (N / i)) % mod;
            }
        }
        return product;
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long N;
        
        cin>>N;

        Solution ob;
        cout << ob.divisorProduct(N) << endl;
    
cout << "~" << "\n";
}
    return 0;
}
// } Driver Code Ends