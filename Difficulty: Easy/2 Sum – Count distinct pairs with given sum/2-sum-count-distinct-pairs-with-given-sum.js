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
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.countDistinctPairs(arr, k));
        console.log('~');
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
class Solution {
    countDistinctPairs(arr, target) {
        const seen = new Set(), pairs = new Set();
        for (let num of arr) {
            const comp = target - num;
            if (seen.has(comp)) {
                const pair = [Math.min(num, comp), Math.max(num, comp)];
                pairs.add(pair.toString());
            }
            seen.add(num);
        }
        return pairs.size;
    }
}
