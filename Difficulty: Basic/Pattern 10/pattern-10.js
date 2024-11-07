//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(; i<t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        obj.printTriangle(N);
    
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @returns {void}
*/

class Solution {
    //Function to print the pattern
    printTriangle(n) {
        for (let i = 1; i <= n; i++) {
            let row = [];
            for (let j = 1; j <= i; j++) row.push('*');
            console.log(row.join(' '));
        }
        for (let i = n - 1; i >= 1; i--) {
            let row = [];
            for (let j = 1; j <= i; j++) row.push('*');
            console.log(row.join(' '));
        }
    }
}