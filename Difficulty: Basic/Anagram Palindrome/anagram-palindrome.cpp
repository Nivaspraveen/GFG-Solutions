//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

int isPossible (string s);

int main()
{
    int t; cin >> t;
    while (t--)
	{
		string s; cin >> s;
		if (isPossible (s))
			cout << "Yes\n";
		else
			cout << "No\n";
	
cout << "~" << "\n";
}
}

// Contributed By: Pranay Bansal

// } Driver Code Ends


int isPossible (string S) {
    unordered_map<char, int> freqMap;
    for (char c : S) freqMap[c]++;
    int oddCount = 0;
    for (const auto &entry : freqMap) {
        if (entry.second % 2 != 0) oddCount++;
    }
    return (oddCount > 1) ? 0 : 1;
}