//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    int findminoperation(int n) {
        if (n == 1) return 0;
        int opr = 0, factor = 2;
        while (n > 1) {
            while (n % factor == 0) {
                opr += factor;
                n /= factor;
            }
            factor++;
        }
        return opr;
    }
};


//{ Driver Code Starts.

int main(){
    int t;
    scanf("%d ",&t);
    while(t--){
        
        int n=1;
        scanf("%d",&n);
        
        Solution obj;
       
        int res = obj.findminoperation(n);
        cout<<res<<endl;
        
        
        
    
cout << "~" << "\n";
}
}

// } Driver Code Ends