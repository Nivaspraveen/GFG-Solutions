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
        let arr = readLine().trim().split(" ").map((int) => { return parseInt(int); });

        let m = parseInt(readLine());
        let obj = new Solution();
        let res = obj.subarrayXor(arr, m);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} m
 * @returns {number}
 */

class Solution {
    // Function to find XOR of sub-array of size m.
    subarrayXor(arr, m) {
        const prefixXorCount = new Map();
        let prefixXor = 0, count = 0;
        prefixXorCount.set(0, 1);
        
        for (const num of arr) {
            prefixXor ^= num;
            const requiredXor = prefixXor ^ m;
            if (prefixXorCount.has(requiredXor)) count += prefixXorCount.get(requiredXor);
            prefixXorCount.set(prefixXor, (prefixXorCount.get(prefixXor) || 0) + 1);
        }
        return count;
    }
}