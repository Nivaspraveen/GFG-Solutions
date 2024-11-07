//{ Driver Code Starts
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
    let t = parseInt(readLine()); // Number of test cases
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Input array
        let obj = new Solution();
        const result = obj.findDuplicates(arr);

        // Print the result in the required format
        if (result.length > 0) {
            console.log(result.join(' ')); // Print duplicates in ascending order
        } else {
            console.log("[]"); // Print empty list if no duplicates are found
        }
        console.log("~"); // Print empty list if no duplicates are found
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    findDuplicates(arr) {
        const countMap = {}, res = [];
        for (let num of arr) countMap[num] = (countMap[num] || 0) + 1;
        for (let num in countMap) {
            if (countMap[num] > 1) res.push(parseInt(num));
        }
        return res.sort((a, b) => a - b);
    }
}