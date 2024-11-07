//{ Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution{
public:
    vector<int> rearrangeQueue(queue<int> &q){
        int n = q.size(), half = n / 2;
        queue<int> firstHalf;
        for (int i = 0; i < half; i++) {
            firstHalf.push(q.front());
            q.pop();
        }
        vector<int> result;
        while (!firstHalf.empty()) {
            result.push_back(firstHalf.front());
            firstHalf.pop();
            result.push_back(q.front());
            q.pop();
        }
        return result;
    }
};

//{ Driver Code Starts.

int main(){
    
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        
        queue<int> q;
        for(int i=0;i<n;i++){
            int a;
            cin>>a;
            q.push(a);
        }
        Solution ob;
        vector<int> ans=ob.rearrangeQueue(q);
        for(int i=0;i<ans.size();i++){
            cout<<ans[i]<<" ";
        }
        cout<<endl;
    
cout << "~" << "\n";
}
    
    return 0;
}
// } Driver Code Ends