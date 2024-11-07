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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let obj = new Solution();
        let res = obj.sentencePalindrome(s);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    // Function to check whether the sentence is a valid palindrome.
    sentencePalindrome(s) {
        const filteredStr = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const revStr = filteredStr.split('').reverse().join('');
        return filteredStr === revStr;
    }
}