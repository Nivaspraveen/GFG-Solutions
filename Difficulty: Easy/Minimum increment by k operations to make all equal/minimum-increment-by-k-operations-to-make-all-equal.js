//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.minOps(arr, k));
        console.log('~');
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
class Solution {
    minOps(arr, x) {
        const maxEl = Math.max(...arr);
        let totalOpr = 0;
        for (let num of arr) {
            const diff = maxEl - num;
            if (diff % x !== 0) return -1;
            totalOpr += diff / x;
        }
        return totalOpr;
    }
}
