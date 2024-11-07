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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [n,sum] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.perfectSum(arr,n,sum);
        if(res === -0)
            res = 0;
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
*/

class Solution {

    perfectSum(arr,n,sum){
        const MOD = 1000000007;
        const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(0));
        
        for (let i = 0; i <= n; i++) dp[i][0] = 1;
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j <= sum; j++) {
                dp[i][j] = dp[i - 1][j];
                if (arr[i - 1] <= j) dp[i][j] = (dp[i][j] + dp[i - 1][j - arr[i - 1]]) % MOD;
            }
        }
        return dp[n][sum];
    }
}