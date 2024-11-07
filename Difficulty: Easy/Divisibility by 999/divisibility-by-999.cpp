//{ Driver Code Starts
// CPP for divisibilty of number by 999
#include<bits/stdc++.h>
using namespace std;
bool isDivisible999(string N);


// driver program
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
	    string N ;
	cin>>N;
	int n = N.length();
	if (isDivisible999( N))
		cout << "Divisible\n";
	else
		cout << "Not divisible\n";
	
cout << "~" << "\n";
}
	return 0;
}
// } Driver Code Ends


bool isDivisible999(string N) {
    long long sum = 0;
    int len = N.length();
    for (int i = 0; i < len; i++) {
        int digit = N[len - 1 - i] - '0';
        sum += digit * static_cast<long long>(pow(10, i % 3));
    }
    return sum % 999 == 0;
}