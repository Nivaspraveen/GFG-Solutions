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
        let A = readLine().trim();
        let B = readLine().trim();
        let obj = new Solution();
        let res = obj.minRepeats(A, B);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript
/*
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number}
 */

class Solution {
    // Function to find minimum number of rotations required
    // to make the array A an array B.
    minRepeats(s1, s2) {
        let count = Math.ceil(s2.length / s1.length), repeatedStr = s1.repeat(count);
        if (repeatedStr.includes(s2)) return count;
        repeatedStr += s1;
        if (repeatedStr.includes(s2)) return count + 1;
        return -1;
    }
}