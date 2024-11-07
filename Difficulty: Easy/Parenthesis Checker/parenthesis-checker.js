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
        let str = readLine();
        let obj = new Solution();
        if (obj.isParenthesisBalanced(str)) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    // Function to check if brackets are balanced or not.
    isParenthesisBalanced(s) {
        const stack = [];
        const brackets = {
            '}': '{',
            ')': '(',
            ']': '['
        };
        for (const c of s) {
            if (brackets[c]) {
                if (stack.length === 0 || stack.pop() !== brackets[c]) return false;
            } else stack.push(c)
        }
        return stack.length === 0;
    }
}