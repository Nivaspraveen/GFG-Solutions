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
        let ans = ob.getTriangle(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    getTriangle(arr) {
        const mod = 1e9 + 7;
        let triangle = [arr];
        
        while (triangle[0].length > 1) {
            const prevRow = triangle[0], newRow = [];
            for (let i = 0; i < prevRow.length - 1; i++) newRow.push((prevRow[i] + prevRow[i + 1]) % mod);
            triangle.unshift(newRow);
        }
        return triangle.flat();
    }
}
