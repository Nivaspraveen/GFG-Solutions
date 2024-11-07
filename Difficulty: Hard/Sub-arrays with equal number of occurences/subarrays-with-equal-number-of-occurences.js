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
        let x = parseInt(readLine());
        let y = parseInt(readLine());

        let obj = new Solution();
        let res = obj.sameOccurrence(arr, x, y);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

class Solution {
    // Function to find the first element in the array.
    sameOccurrence(arr, x, y) {
        const n = arr.length, freqMap = new Map();
        let count = 0, diff = 0;
        freqMap.set(0, 1);
        
        for (let i = 0; i < n; i++) {
            if (arr[i] === x) diff++;
            else if (arr[i] === y) diff--;
            
            if (freqMap.has(diff)) count += freqMap.get(diff);
            freqMap.set(diff, (freqMap.get(diff) || 0) + 1);
        }
        return count;
    }
}