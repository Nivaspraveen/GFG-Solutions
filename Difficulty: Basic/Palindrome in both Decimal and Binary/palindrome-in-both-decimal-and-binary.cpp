//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
//User function Template for Java
class Solution {
public:
    bool isPalindrome(const string &str) {
        int left = 0, right = str.size() - 1;
        while (left < right) {
            if (str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    
    string isDeciBinPalin(unsigned int  N){
        string decimalStr = to_string(N);
        if (!isPalindrome(decimalStr)) return "No";
        string binaryStr = bitset<32>(N).to_string();
        binaryStr.erase(0, binaryStr.find_first_not_of('0'));
        if (!isPalindrome(binaryStr)) return "No";
        return "Yes";
    }
};

//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        unsigned int N;
        cin >> N;
        Solution ob;
        cout<<ob.isDeciBinPalin(N)<<endl;
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends