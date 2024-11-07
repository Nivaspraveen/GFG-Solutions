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
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.firstRepeated(arr));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to return the position of the first repeating element.
    firstRepeated(arr) {
        const indexMap = new Map();
        let firstRepeatingIndex = Infinity;
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i];
            if (indexMap.has(num)) firstRepeatingIndex = Math.min(firstRepeatingIndex, indexMap.get(num));
            else indexMap.set(num, i);
        }
        return firstRepeatingIndex === Infinity ? -1 : firstRepeatingIndex + 1;
    }
}