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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.sort012(arr);
        let S = "";
        for (let j = 0; j < arr.length; j++) {
            S += arr[j];
            S += " "
        }
        console.log(S);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} a
 * @returns {void}
 */

class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    sort012(arr) {
        let low = 0, mid = 0, high = arr.length - 1;
        while (mid <= high) {
            arr[mid] === 0 ? ([arr[low], arr[mid]] = [arr[mid], arr[low]], low++, mid++) :
            arr[mid] === 1 ? mid++ :
            ([arr[mid], arr[high]] = [arr[high], arr[mid]], high--);
        }
        return arr;
    }
}