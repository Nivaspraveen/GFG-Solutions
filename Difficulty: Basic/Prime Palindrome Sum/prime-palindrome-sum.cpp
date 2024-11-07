//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for C++

class Solution {
  public:
    bool isPalindrome(int n) {
        string str = to_string(n);
        int len = str.length();
        for (int i = 0; i < len / 2; i++) {
            if (str[i] != str[len - 1 - i]) return false;
        }
        return true;
    }
    
    long long getPPS(int a, int b) {
        vector<bool> isPrime(b + 1, true);
        isPrime[0] = isPrime[1] = false;
        for (int i = 2; i * i <= b; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= b; j += i) isPrime[j] = false;
            }
        }
        int sum = 0;
        for (int i = a; i <= b; i++) {
            if (isPrime[i] && isPalindrome(i)) {
                sum += i;
            }
        }
        return sum;

    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int a,b;
        
        cin>>a>>b;

        Solution ob;
        cout << ob.getPPS(a,b) << endl;
    }
    return 0;
}
// } Driver Code Ends