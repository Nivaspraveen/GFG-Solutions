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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();
        console.log(obj.minSubsets(arr));
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
    minSubsets(arr) {
        arr.sort((a, b) => a - b);
        let subsetCount = 0;
        for (let i = 0; i < arr.length; i++) {
            subsetCount++;
            while (i < arr.length - 1 && arr[i + 1] === arr[i] + 1) i++;
        }
        return subsetCount;
    }
}
