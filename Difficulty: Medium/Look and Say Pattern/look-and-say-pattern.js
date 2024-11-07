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
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let ans=obj.lookandsay(n);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
*/
class Solution {
    
    lookandsay(n) {
        let currRow = '1';
        for (let i = 1; i < n; i++) {
            let nextRow = '', count = 1;
            for (let j = 1; j < currRow.length; j++) {
                if (currRow[j] === currRow[j - 1]) count++;
                else {
                    nextRow += count.toString() + currRow[j - 1];
                    count = 1;
                }
            }
            nextRow += count.toString() + currRow[currRow.length - 1];
            currRow = nextRow;
        }
        return currRow;
    }
}