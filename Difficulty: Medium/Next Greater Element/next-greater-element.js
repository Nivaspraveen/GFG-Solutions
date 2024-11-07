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
        const result = obj.nextLargerElement(arr);

        // Print the result in the required format
        if (result.length > 0) {
            console.log(result.join(' ')); // Print the next larger elements
        } else {
            console.log("[]"); // Print empty list if no next larger element
        }
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {int[]} arr
 * @returns {int[]}
 */
class Solution {
    // Function to find the next greater element for each element of the array.
    nextLargerElement(arr) {
        const n = arr.length, res = new Array(n).fill(-1), stack = [];
        
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) stack.pop();
            if (stack.length > 0) res[i] = stack[stack.length - 1];
            stack.push(arr[i]);
        }
        return res;
    }
}