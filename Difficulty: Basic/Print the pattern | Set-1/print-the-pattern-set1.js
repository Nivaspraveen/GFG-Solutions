//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let n = parseInt(readLine());

        let obj = new Solution();
        obj.printPat(n);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 */

class Solution {
    printPat(n) {
        let result = '';
        for (let i = n; i >= 1; i--) {
            for (let j = n; j >= 1; j--) {
                for (let k = 0; k < i; k++) result += j + ' ';
            }
            result = result.trim();
            result += ' $';
        }
        console.log(result.trim());
    }
}