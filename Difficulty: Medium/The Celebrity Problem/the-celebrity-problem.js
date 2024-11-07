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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let grid = [];

        for (let i = 0; i < n; i++) {
            input_line = readLine().split(' ');
            let a = input_line.map((x) => parseInt(x));
            grid.push(a);
        }

        let obj = new Solution();
        let ans = obj.celebrity(grid);
        if (typeof ans === "undefined") ans = "None";
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
    // Function to find the celebrity.
    celebrity(mat) {
        const n = mat.length, knowsCount = new Array(n).fill(0), knownByCount = new Array(n).fill(0);
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 1) {
                    knowsCount[i]++;
                    knownByCount[j]++;
                }
            }
        }
        for (let i = 0; i < n; i++) {
            if (knowsCount[i] === 0 && knownByCount[i] === n - 1) return i;
        }
        return -1;
    }
}