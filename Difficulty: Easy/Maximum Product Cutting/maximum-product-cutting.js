//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.maxProduct(n);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript




/**
 * @param {number} n
 * @returns {number}
*/

class Solution{
    maxProduct(n){
        const dp = new Array(n + 1).fill(0);
        dp[1] = 1;
        for (let i = 2; i <= n; ++i) {
            for (let j = 1; j < i; ++j) dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
        }
        return dp[n];
    }
}

