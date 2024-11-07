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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.subsetPairNotDivisibleByK(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the first element in the array.
    subsetPairNotDivisibleByK(arr, k) {
        const remCount = new Array(k).fill(0);
        for (let num of arr) remCount[num % k]++;
        
        let maxSubset = Math.min(remCount[0], 1);
        for (let i = 1; i <= Math.floor(k / 2); i++) {
            if (i === k - i) maxSubset += Math.min(remCount[i], 1);
            else maxSubset += Math.max(remCount[i], remCount[k - i]);
        }
        return maxSubset;
    }
}