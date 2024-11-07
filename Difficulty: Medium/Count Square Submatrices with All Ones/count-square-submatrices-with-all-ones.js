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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        
        let grid = [];
        for(let i=0;i<n;i++)
        {
            let input_line = readLine().split(' ');
            let a = new Array(m);
            for(let j=0;j<m;j++)
            {
                a[j] =parseInt(input_line[j]);
            }
            grid.push(a);
        }
        
        
        
        let obj = new Solution();
        let ans = obj.countSquares(n, m, grid);
        console.log(ans);
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number} M
 * @param {number[][]} matrix
 * @returns {number}
*/

class Solution {
    //Function to count number of squares.
    countSquares(N, M, matrix) {
        let dp = Array.from({ length: N }, () => Array(M).fill(0));
        let totalCount = 0;
        
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (matrix[i][j] === 1) {
                    if (i === 0 || j === 0) dp[i][j] = 1;
                    else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                    totalCount += dp[i][j];
                }
            }
        }
        return totalCount;
    }
}