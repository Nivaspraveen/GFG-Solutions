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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.majorityElement(arr));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    majorityElement(arr) {
        let candidate = null, count = 0;
        for (let num of arr) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } else count += (num === candidate) ? 1 : -1;
        }
        count = 0;
        for (let num of arr) if (num === candidate) count++;
        return count > Math.floor(arr.length / 2) ? candidate : -1;
    }
}