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
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.equilibriumPoint(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
        console.log('~');
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(arr) {
        const n = arr.length;
        if (n === 1) return 1; 
        const prefixSum = new Array(n);
        prefixSum[0] = arr[0];
        for (let i = 1; i < n; i++) prefixSum[i] = prefixSum[i - 1] + arr[i];
        for (let i = 0; i < n; i++) {
            const leftSum = i > 0 ? prefixSum[i - 1] : 0;
            const rightSum = prefixSum[n - 1] - leftSum - arr[i];
    
            if (leftSum === rightSum) return i + 1; 
        }
    
        return -1;
    }
}