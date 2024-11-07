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
        let s = readLine();
        let obj = new Solution();
        let res = obj.maximumPartition(s);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    // Function to
    maximumPartition(s) {
        const lastIndex = new Array(26).fill(-1), n = s.length;
        for (let i = 0; i < n; i++) lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
        
        let count = 0, currEnd = 0;
        for (let i = 0; i < n; i++) {
            currEnd = Math.max(currEnd, lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
            if (i === currEnd) count++;
        }
        return count;
    }
}