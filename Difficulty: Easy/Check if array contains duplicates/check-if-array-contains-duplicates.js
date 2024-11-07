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
        let prices = new Array();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < input_ar1.length; i++) prices.push(input_ar1[i]);
        let obj = new Solution();
        if (obj.checkDuplicates(prices))
            console.log("true");
        else
            console.log("false");
        console.log("~");
    }
}
// } Driver Code Ends


/**
 * @param {number} arr
 * @returns {boolean}
 */

class Solution {
    checkDuplicates(arr) {
        const seen = new Set();
        for (let num of arr) {
            if (seen.has(num)) return true;
            seen.add(num);
        }
        return false;
    }
}
