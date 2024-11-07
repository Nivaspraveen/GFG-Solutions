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
        let arr = readLine().split(" ");
        for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.getScore(arr, k);
        console.log(res);
    }
}

// } Driver Code Ends


class Solution {
    getScore(arr, k) {
        const n = arr.length;
        if (n === 0) return 0;
        const dp = new Array(n).fill(-Infinity);
        dp[0] = arr[0];
        const deque = [];
        deque.push(0);
        
        for (let i = 1; i < n; i++) {
            if (deque[0] < i - k) deque.shift();
            dp[i] = dp[deque[0]] + arr[i];
            while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) deque.pop();
            deque.push(i);
        }
        return dp[n - 1];
    }
}