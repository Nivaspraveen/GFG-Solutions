//{ Driver Code Starts
// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.compute(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    compute(arr) {
        let maxLength = 1, currLength = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] >= arr[i - 1]) currLength++;
            else currLength = 1;
            maxLength = Math.max(maxLength, currLength);
        }
        return maxLength;
    }
}