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
        let ip = readLine().trim().split(" ");
        let strs = [];
        for (let x of ip) {
            strs.push(x);
        }
        let obj = new Solution();
        let ans = obj.encode(strs);
        let arr = obj.decode(ans);
        let s = "";
        for (let it = 0; it < arr.length; it++) {
            s += arr[it];
            s += " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string[]} strs
 * @returns {string}
 */

class Solution {
    // Function to encode a list of strings to a single string.
    encode(s) {
        const delimeter = '\u001E';
        return s.join(delimeter);
    }

    // Function to decode a single string to a list of strings.
    decode(s) {
        const delimeter = '\u001E';
        return s.split(delimeter);
    }
}