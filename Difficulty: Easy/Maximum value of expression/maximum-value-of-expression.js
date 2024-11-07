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
        let ans = ob.maxValueOfExpression(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    // Function to find the maximum value of the given expression.
    maxValueOfExpression(arr) {
        const n = arr.length;
        let max1 = -Infinity, min1 = Infinity, max2 = -Infinity, min2 = Infinity;
        for (let i = 0; i < n; i++) {
            const val1 = arr[i] + i, val2 = arr[i] - i;
            max1 = Math.max(max1, val1);
            min1 = Math.min(min1, val1);
            max2 = Math.max(max2, val2);
            min2 = Math.min(min2, val2);
        }
        const result1 = max1 - min1, result2 = max2 - min2;
        return Math.max(result1, result2);
    }
}
