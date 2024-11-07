//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let ok = obj.equalPartition(arr);
        if (ok)
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {boolean}
 */

class Solution {
    equalPartition(arr) {
        const totalSum = arr.reduce((acc, num) => acc + num, 0);
        if (totalSum % 2 !== 0) return false;
        const target = totalSum / 2, n = arr.length;
        const dp = new Array(target + 1).fill(false);
        dp[0] = true;
        
        for (let i = 0; i < n; i++) {
            for (let j = target; j >= arr[i]; j--) dp[j] = dp[j] || dp[j - arr[i]];
        }
        return dp[target];
    }
}