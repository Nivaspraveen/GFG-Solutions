//{ Driver Code Starts
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

function printList(arr) { console.log(arr.join(' ')); }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.lenOfLongestSubarr(arr, k);
        console.log(res);
        console.log("~");
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
    lenOfLongestSubarr(arr, k) {
        let map = new Map();
        let cumulativeSum = 0, maxLength = 0;
        for (let i = 0; i < arr.length; i++) {
            cumulativeSum += arr[i];
            if (cumulativeSum === k) maxLength = i + 1;
            if (map.has(cumulativeSum - k)) maxLength = Math.max(maxLength, i - map.get(cumulativeSum - k));
            if (!map.has(cumulativeSum)) map.set(cumulativeSum, i);
        }
        return maxLength;
    }
}
